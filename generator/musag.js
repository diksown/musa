import Musagen from "./apiwrapper.js";

/*
Program outline:

Import the generator library

Implement -k

Implement -w
*/

async function main() {
  const musagen = new Musagen(process.env.OPENAI_API_KEY);
  const response = await musagen.generateProject("cub");
  console.log(response);
}

main();
