// 100-weak.js
const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, ++count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap };
