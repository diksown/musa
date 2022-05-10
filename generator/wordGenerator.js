import shuffle from "knuth-shuffle-seeded";
import fs from "fs";

class WordGenerator {
  async init() {
    let file = await fs.promises.readFile("../data/nounlist.csv", "utf8");
    let words = file.split("\n");
    words.sort();
    this.words = words;
  }

  getWords() {
    return this.words;
  }

  // TODO: Ensure reproducibility.
  getRandomWord() {
    let index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }

  getRandomizedWords() {
    let words = [...this.words];
    shuffle(words);
    return words;
  }
}

// Workaround to init the word generator
let getWordGenerator = async () => {
  let wordGenerator = new WordGenerator();
  await wordGenerator.init();
  return wordGenerator;
};

export default getWordGenerator;
