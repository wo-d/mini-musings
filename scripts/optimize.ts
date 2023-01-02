/**
 * Optimizes images. Run from project root e.g.
 * $ node .\scripts\optimize.ts
 *
 * https://www.gatsbyjs.com/docs/preoptimizing-images/
 */

const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`blog/**/*.{png,jpg,jpeg}`);
// This should be an integer multiple of the max content width.
const MAX_WIDTH = 1800;
const QUALITY = 100;

Promise.all(
  matches.map(async (match) => {
    console.log(match);
    const stream = sharp(match);
    const info = await stream.metadata();

    if (info.width < MAX_WIDTH) {
      return;
    }

    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    return fs.rename(optimizedName, match);
  })
);
