import chroma from "chroma-js";

const genColor = (hue, chr, luminance) => {
  return chroma.hcl(hue, chr, luminance).hex();
};

const generateGradient = () => {
  // Yellow-ish gradients don't look good
  // const minHue = 150;
  // const maxHue = 360;
  // const randomHue = Math.floor(Math.random() * (maxHue - minHue)) + minHue;
  const randomHue = 280;
  const deltaHue = 60;
  const chr = 45;
  const luminance = 70;
  return {
    color1: genColor(randomHue, chr, luminance),
    color2: genColor(randomHue + deltaHue / 2, chr, luminance),
    color3: genColor(randomHue + deltaHue, chr, luminance),
  };
};

const bgGradientStyle = () => {
  const gradient = generateGradient();
  return {
    backgroundImage: `linear-gradient(120deg, ${gradient.color1}, ${gradient.color2}, ${gradient.color3})`,
  };
};

export default bgGradientStyle;
