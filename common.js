const chalk = require('chalk');

module.exports = {

  error:(m)=>{
    console.log(chalk.red("!!! " + m));
  },

  info:(m)=>{
    console.log(chalk.green("??? " + m));
  },

  tell:(m)=>{
    console.log(chalk.blue(">>> " + m));
  }

};
