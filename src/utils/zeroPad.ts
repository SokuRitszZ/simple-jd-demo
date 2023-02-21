function zeroPad(length: number, x: number) {
  return x.toString().length >= length
    ? x.toString()
    : '0'.repeat(length - x.toString().length) + x;
}

export default zeroPad;
