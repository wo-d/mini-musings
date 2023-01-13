/**
 * Strips location metadata from Jpeg images. Run from project root e.g.
 * $ node .\scripts\strip-metadata.ts
 *
 * https://auth0.com/blog/read-edit-exif-metadata-in-photos-with-javascript/
 */

const fs = require('fs');
const glob = require(`glob`);
const piexif = require('piexifjs');

const matches = glob.sync(`blog/**/*.{jpg,jpeg}`);

const getBase64DataFromJpegFile = (filename) =>
  fs.readFileSync(filename).toString('binary');

Promise.all(
  matches.map(async (match) => {
    console.log(match);

    const data = getBase64DataFromJpegFile(match);
    const scrubbedData = piexif.remove(data);
    const fileBuffer = Buffer.from(scrubbedData, 'binary');

    fs.writeFileSync(match, fileBuffer);
  })
);
