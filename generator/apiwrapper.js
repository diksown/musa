import { Configuration, OpenAIApi } from "openai";

class Musagen {
  constructor(apiKey) {
    const configuration = new Configuration({ apiKey });
    this.api = new OpenAIApi(configuration);
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
    return response.data.choices[0].text.trim();
  }

  async generateProjectFragment(fragmentType, word) {
    let options = {};
    if (fragmentType === "title") {
      options = {
        prompt: `give me a cool and quirky name about a project involving ${word}.\n`,
        max_tokens: 6,
      };
    } else if (fragmentType === "description") {
      options = {
        prompt: `give me an ideia to a creative programming project about ${word}.\n`,
        max_tokens: 32,
      };
    } else {
      throw new Error("Invalid project fragment type");
    }

    let projectFragment = await this.completion(options);
    //TODO: Parse content to remove duplicated \n's, remove "'s
    return projectFragment;
  }

  async generateProject(word) {
    let title = await this.generateProjectFragment("title", word);
    let description = await this.generateProjectFragment("description", word);
    return {
      title,
      description,
    };
  }
}

export default Musagen;
