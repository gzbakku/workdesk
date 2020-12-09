global.input = require("input");
global.io = require("./io");
global.common = require("./common");

main();

async function main(){

  if(!await io.data.ensure()){
    return common.error("failed to ensure data file");
  }

  const mode = await input.select("select workstation mode",["edit","run"]);
  if(mode === "edit"){
    require("./engine/edit.js").init();
  } else {
    require("./engine/run.js").init();
  }
}
