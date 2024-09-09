const fs = require("fs")
const path = require("path")

let loadedCss = path.resolve("./");

function ElementLoader(source){
  return source.replace(/=\(<>/g, '(`')
  .replace(/<\/>\)/g, "`)");
}
function CSSLoader(source){
  source = source.replace(/import (.*?) from '(.*?\.css)'/, "")

  return source
}

function BadelLoader (source) {
    console.log("E: "+this.rootContext)
    let modifiedSource = CSSLoader( ElementLoader(source) )

    

    return modifiedSource;
};
  
module.exports = BadelLoader