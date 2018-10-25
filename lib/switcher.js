// if expression is true f1() otherwise f2()
module.exports = (exp, f1, f2) => {
  if (exp) {
    if (typeof f1 === 'function') { return f1(); }
  } else {
    if (typeof f2 === 'function') { return f2(); }
  }
};
