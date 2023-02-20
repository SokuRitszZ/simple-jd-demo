function throttle(fn: Function, ms: number) {
  let timer: any;
  return (...args: any) => {
    if (timer) return ;
    fn(...args);
    timer = setTimeout(() => {
      timer = null;
    }, ms);
  }
}

export default throttle;