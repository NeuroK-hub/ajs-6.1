const orderByProps = (object, [param1, param2]) => {
  const paramList = [];
  const otherList = [];
  for (const prop in object) {
    if (prop === param1) {
      paramList.push({ key: prop, value: object[prop] });
    } else if (prop === param2) {
      paramList.push({ key: prop, value: object[prop] });
    } else {
      otherList.push({ key: prop, value: object[prop] });
      otherList.sort((a, b) => {
        if (a.key < b.key) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
  const resultList = paramList.concat(otherList);
  return resultList;
};

export default orderByProps;
