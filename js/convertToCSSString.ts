export const convertToCSSString = (styleObject: {}) => {
    if (!styleObject) return "";
  
    const cssProps = Object.keys(styleObject);
    const jsToCSSProp = (capitalLetter: string) =>
      `-${capitalLetter[0].toLowerCase()}`;
  
    return cssProps.reduce((cssString, propName) => {
      const propAsCSS = propName.replace(/([A-Z])/g, jsToCSSProp);
      return cssString + `${propAsCSS}:${styleObject[propName]};`;
    }, "");
  };
  