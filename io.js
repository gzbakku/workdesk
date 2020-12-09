const fs = require("fs");
const get_npm_root = require("get_npm_root");

module.exports = {

  read:async ()=>{},
  write:async ()=>{},

  data:{
    ensure:ensure_data,
    read:()=>{},
    write:()=>{}
  }

};

async function ensure_data(){

  const rootPath = await get_npm_root();

  console.log(rootPath);

}

function get_data_path(){

}
