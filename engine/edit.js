

module.exports = {
  init:async ()=>{

    const editMode = await input.select("select edit mode",["edit project","add project","edit program"]);
    if(editMode === "add project"){
      require("./edit/edit_project.js").init();
    } else if(editMode === "edit project"){
      require("./edit/add_project.js").init();
    } else {
      require("./edit/program.js").init();
    }

  }
};
