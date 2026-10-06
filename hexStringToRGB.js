function hexStringToRGB(hexString) {
    let hex = hexString.slice(1);
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);
    return {r: r, g: g, b: b};
}
