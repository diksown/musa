// (s)imple (l)og utility

import chalk from "chalk";

class sl {
  static log(msg) {
    console.log(chalk.blue(msg));
  }
  static ok(msg) {
    console.log(chalk.green(msg));
  }
  static warn(msg) {
    console.log(chalk.yellow(msg));
  }
  static err(msg) {
    console.log(chalk.red(msg));
  }
}

export default sl;
