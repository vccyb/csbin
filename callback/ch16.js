

function goodKeys(obj, callback) {
  let matches = [];

  Object.keys(obj).forEach(k => {
      if (callback(obj[k])) {
          matches.push(k);
      }
  });

  return matches;
}