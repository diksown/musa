import { Configuration, OpenAIApi } from "openai";
import sleep from "./sleep.js";

class Musagen {
  constructor(apiKey) {
    const configuration = new Configuration({ apiKey });
    this.api = new OpenAIApi(configuration);
  }

  async keepTrying(func, { maxTries = 15, logfunc = () => {} }) {
    let tries = 0;
    let timeToWait = 100;
    while (true) {
      try {
        return await func();
      } catch (e) {
        if (tries >= maxTries) {
          throw new Error(`Failed after ${tries} tries.`, { cause: e });
        }
        if (logfunc) {
          logfunc();
        }
        await sleep(timeToWait);
        timeToWait *= 2;
        tries++;
      }
    }
  }

  async rawCompletion(options) {
    if ("prompt" in options === false) {
      throw new Error("Missing prompt");
    }

    const defaultOptions = {
      model: "text-davinci-002",
      max_tokens: 16,
      temperature: 0,
    };

    for (const key in defaultOptions) {
      if (key in options === false) {
        options[key] = defaultOptions[key];
      }
    }

    const response = await this.api.createCompletion(options);
    return response;
  }

  // Checks is the OpenAI API is valid.
  // Low cost call ($0.000001 of API credits)
  async checkApiKey() {
    const optionsForTest = {
      prompt: "a",
      max_tokens: 1,
      model: "text-ada-001",
    };
    try {
      await this.completion(optionsForTest);
      return true;
    } catch {
      return false;
    }
  }

  async completion(options) {
    const response = await this.rawCompletion(options);
    const { text, finish_reason } = response.data.choices[0];
    return { text, finish_reason };
  }

  async generateProjectFragment(fragmentType, word) {
    let options = {};
    let logitBias = -10; // Logit bias that will be used to reduce the presence of some tokens
    if (fragmentType === "title") {
      options = {
        prompt: `Give me a short and punny name to a project about ${word}.\nProject name:`,
        max_tokens: 9,
        // Makes some tokens less likely to appear.
        // Avoid uninsteresting titles like "The Water Project"
        logit_bias: {
          1628: logitBias, // " project"
          4935: logitBias, // " Project"
          16302: logitBias, // "project"
          16775: logitBias, // "Project"
        },
      };
    } else if (fragmentType === "description") {
      options = {
        prompt: `Give me an ideia to a creative programming project about ${word}.\n`,
        max_tokens: 128,
      };
    } else {
      throw new Error("Invalid project fragment type");
    }

    let projectFragment = await this.completion(options);
    if (fragmentType === "title") {
      projectFragment.text = projectFragment.text.replace(/\"/g, "");
    }
    projectFragment.text = projectFragment.text.replace(/\s+/g, " ").trim();
    let content_label = await this.contentFilter(projectFragment.text);
    return {
      text: projectFragment.text,
      content_label,
      finish_reason: projectFragment.finish_reason,
    };
  }

  // 0 - The text is safe.
  // 1 - This text is sensitive.
  // 2 - This text is unsafe.
  async contentFilter(contentToClassify) {
    const response = await this.rawCompletion({
      model: "content-filter-alpha",
      prompt: "<|endoftext|>" + contentToClassify + "\n--\nLabel:",
      temperature: 0,
      max_tokens: 1,
      top_p: 0,
      logprobs: 10,
    });
    let outputLabel = response.data.choices[0].text;
    let toxicThreshold = -0.355;
    if (outputLabel == "2") {
      let logprobs = response.data.choices[0].logprobs.top_logprobs[0];
      if (logprobs["2"] < toxicThreshold) {
        let logprob0 = logprobs["0"];
        let logprob1 = logprobs["1"];
        if (logprob0 != null && logprob1 != null) {
          if (logprob0 >= logprob1) {
            outputLabel = "0";
          } else {
            outputLabel = "1";
          }
        } else if (logprob0 != null) {
          outputLabel = "0";
        } else if (logprob1 != null) {
          outputLabel = "1";
        }
      }
    }
    if (outputLabel != "0" && outputLabel != "1" && outputLabel != "2") {
      outputLabel = "2";
    }
    return parseInt(outputLabel);
  }

  async generateProject(word) {
    const [title, description] = await Promise.all([
      this.generateProjectFragment("title", word),
      this.generateProjectFragment("description", word),
    ]);

    return {
      word,
      title,
      description,
    };
  }
}

export default Musagen;
