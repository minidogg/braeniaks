const fs = require("fs")
const path = require("path")

let loadedCss = path.resolve("./");

function ElementLoader(source){
  return source.replace(/\(<>/g, '(`')
  .replace(/<\/>\)/g, "`)");
}
function CSSLoader(source){
  source = source.replace(/import (.*?) from '(.*?\.css)'/, "")

  return source
}

function BadelLoader (source) {
    let modifiedSource = ElementLoader(source)

    

    return modifiedSource;
};
  
module.exports = BadelLoader