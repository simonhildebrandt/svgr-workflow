//const logger = require('simple-node-logger').createSimpleLogger('build.log');


function replaceJSXTags(_config, options) {
  return {
    visitor: {
      JSXOpeningElement(path) {
        if (options[path.node.name.name]) {
          path.node.name.name = options[path.node.name.name];
        }
      },
      JSXClosingElement(path) {
        if (options[path.node.name.name]) {
          path.node.name.name = options[path.node.name.name];
        }
      }
    }
  }
}

module.exports = replaceJSXTags;
