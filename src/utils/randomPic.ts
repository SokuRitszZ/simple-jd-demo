import zeroPad from './zeroPad';

function randomPic() {
  return `https://sdfsdf.dev/${(Math.random() * 100) >>> 0}x${
    (Math.random() * 100) >>> 0
  }.png,${zeroPad(6, (Math.random() * 1000000) >>> 0)},${zeroPad(
    6,
    (Math.random() * 1000000) >>> 0
  )}`;
}

export default randomPic;
