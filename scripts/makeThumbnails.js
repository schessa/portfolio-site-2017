const easyimg = require('easyimage');
const glob = require('glob');

glob('../public/images/*.jpg', {}, (err, files) =>
  files.forEach(async src => {
    const { height, width } = await easyimg.info(src);
    const size = Math.min(1200, Math.min(height, width));
    // console.log(height, width, size);
    const img = await easyimg.thumbnail({
      src,
      dst: `../public/images/thumbnails/${src.split('/').pop()}`,
      height: size,
      quality: 70,
      width: size,
    });
    console.log('made thumbnail for', img);
  })
);

const logFunc = f => (...args) => {
  console.log('Calling with arguments:', ...args);
  const result = f(...args);
  console.log('Result:', result);
  return result;
};

const _reverse = logFunc(
  ([head, ...tail], reversed = []) => head ?
    _reverse(tail, [head, ...reversed]) :
    reversed
);

const reverse = arr => _reverse(arr, []);
