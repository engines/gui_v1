cc.float = (options) => (a, x) =>
  a["div.clearfix"]([
    a["div.float-right"](options.right || null),
    a["div.float-left"](options.left || null),
  ]);
