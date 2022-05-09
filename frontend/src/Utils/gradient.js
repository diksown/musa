import chroma from "chroma-js";

const genColor = (hue, chr, lightness) => {
  return chroma.hcl(hue, chr, lightness).hex();
};

const generateGradient = () => {
  const randomHue = Math.floor(Math.random() * 360);
  const deltaHue = 90;
  const chr = 70;
  const lightness = 80;
  return {
    color1: genColor(randomHue, chr, lightness),
    color3: genColor(randomHue + deltaHue / 2, chr, lightness),
    color2: genColor(randomHue + deltaHue, chr, lightness),
  };
};

const bgGradientStyle = () => {
  const gradient = generateGradient();
  return {
    backgroundImage: `linear-gradient(120deg, ${gradient.color1}, ${gradient.color3}, ${gradient.color2})`,
  };
};

export default bgGradientStyle;
