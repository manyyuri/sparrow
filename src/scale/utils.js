export function normalize(value, start, stop) {
  return (value - start) / (stop - start);
}

export function tickStep(min, max, count) {
  const e10 = Math.sqrt(50);
  const e5 = Math.sqrt(10);
  const e2 = Math.sqrt(2);

  const step0 = Math.abs(max - min) / Math.max(0, count);
  let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10);
  const error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return step1;
}

export function ticks(min, max, count) {
  const step = tickStep(min, max, count);
  const start = Math.ceil(min / step);
  const stop = Math.floor(max / step);
  const n = Math.ceil(stop - start + 1);
  const values = new Array(n);
  for (let i = 0; i < n; i += 1) {
    values[i] = round((start + i) * step);
  }
  return values;
}

// 简单解决 js 的精度问题：0.1 + 0.2 !== 0.3
export function round(n) {
  return Math.round(n * 1e12) / 1e12;
}

export function nice(domain, interval) {
  const [min, max] = domain;
  return [interval.floor(min), interval.ceil(max)];
}

export function ceil(n, base) {
  return base * Math.ceil(n / base);
}

export function floor(n, base) {
  return base * Math.floor(n / base);
}
