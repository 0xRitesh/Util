export const withOpacity = (color: string, opacity: number) => {
    if (opacity > 100 || opacity < 0) return color;
  
    const rawHexValue = Math.round((opacity / 100) * 255).toString(16);
    const hexValue = rawHexValue.length === 1 ? `0${rawHexValue}` : rawHexValue;
  
    return `${color}${hexValue}`;
  };
  