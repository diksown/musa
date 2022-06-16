// Isn't there a library for this?
const sleep = (nSeconds) => new Promise((r) => setTimeout(r, nSeconds * 1000));
export default sleep;
