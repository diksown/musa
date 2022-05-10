import chroma from "chroma-js";

const genColor = (hue, chr, luminance) => {
  return chroma.hcl(hue, chr, luminance).hex();
};

const generateGradient = () => {
  const randomHue = Math.floor(Math.random() * 360);
  const deltaHue = 110;
  const chr = 40;
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
