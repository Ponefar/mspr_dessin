var getPixels = require("get-pixels")
const config = require("../configs/config")

function getExtractedColorsFromImage(req, res){
  const base64image = req.body.base64image;
  const base64toBuffer = Buffer.from(base64image, "base64");
  let message = 'Color Extraction is failed!';

  getPixels(base64toBuffer, `image/${config.imageType}`, function(err, pixels) {
    if(err) {
      console.log("Bad image path")
      return res.send({message});
    }

    let extractedData = {};
    const data = req.body.clickdata;
    for (const [i, value] of data.entries()) {
      const pixelAt = [];
      let x = value.x;
      let y = value.y;
      for (let i = 0; i <= 3; i++) {
        pixelAt.push(pixels.get(x, y, i));
      }
      extractedData[i] = pixelAt;
    }

    return res.send(JSON.stringify(extractedData));
  });
}

module.exports = {
  getExtractedColorsFromImage,
}
