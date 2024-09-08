function BadelLoader (source) {
    let modifiedSource = source.replace(/=\(<>/g, '(`')
    .replace(/<\/>\)/g, "`)");
    return modifiedSource;
  };
  
  module.exports = BadelLoader