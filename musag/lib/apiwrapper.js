import { Configuration, OpenAIApi } from "openai";

class Musagen {
  constructor(apiKey) {
    const configuration = new Configuration({ apiKey });
    this.api = new OpenAIApi(configuration);
  }

  async rawCompletion(options) {
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

  async completion({
    prompt,
    model = "text-davinci-002",
    max_tokens = 16,
    temperature = 0,
  }) {
    const response = await this.api.createCompletion({
      model,
      prompt,
      max_tokens,
      temperature,
    });
    const { text, finish_reason } = response.data.choices[0];
    return { text, finish_reason };
  }

  async generateProjectFragment(fragmentType, word) {
    let options = {};
    if (fragmentType === "title") {
      options = {
        prompt: `give me a punny and quirky name about a project involving ${word}.\n`,
        max_tokens: 9,
      };
    } else if (fragmentType === "description") {
      options = {
        prompt: `give me an ideia to a creative programming project about ${word}.\n`,
        max_tokens: 128,
      };
    } else {
      throw new Error("Invalid project fragment type");
    }

    let projectFragment = await this.completion(options);
    projectFragment.text = projectFragment.text.replace(/\s+/g, " ").trim();
    if (fragmentType === "title") {
      projectFragment.text = projectFragment.text.replace(/\"/g, "");
    }
    return projectFragment;
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
    const [contentLabelTitle, contentLabelDescription] = await Promise.all([
      this.contentFilter(title.text),
      this.contentFilter(description.text),
    ]);

    return {
      word,
      title: {
        text: title.text,
        content_label: contentLabelTitle,
        finish_reason: title.finish_reason,
      },
      description: {
        text: description.text,
        content_label: contentLabelDescription,
        finish_reason: description.finish_reason,
      },
    };
  }
}

export default Musagen;
