import cacheFonts from './cache_font';
import cacheImages from './cache_image';

export default function ({ fonts, images }, callback) {
  const fontAssets = (fonts) ? cacheFonts(fonts) : Promise.resolve({});
  const imageAssets = (images) ? cacheImages(images) : Promise.resolve({});

  Promise.all([
    ...fontAssets, ...imageAssets,
  ]).then(res => callback(null, res))
      .catch(err => callback(err, null));
}
