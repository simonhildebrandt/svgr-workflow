const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl },
) => {
  return tpl`${imports}
  import { G, Path, Rect, LinearGradient } from "./AnimatableSvg";

${interfaces}

function ${componentName}(${props}) {
  return ${jsx};
}

${exports}
  `
}

module.exports = propTypesTemplate
