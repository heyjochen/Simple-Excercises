export default function flatten(value) {
  const holder = [];

  if (value.length === 0) return holder;

  for (const v of value) {
    if (Array.isArray(v)) {
      const flattenedSubArray = flatten(v);
      holder.push(...flattenedSubArray);
    } else {
      holder.push(v);
    }
  }

  return holder;
}
