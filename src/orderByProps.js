export default function orderByProps(obj, order) {
  const orderedProps = [];
  const remainingProps = [];

  for (const prop in obj) {
    if (order.includes(prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    } else {
      remainingProps.push({ key: prop, value: obj[prop] });
    }
  }

  remainingProps.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...orderedProps, ...remainingProps];
}
