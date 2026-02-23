const Editor = require("./editor");

// ================================
// NORMAL CASES
// ================================
test("add characters", () => {
  const e = new Editor();
  e.add("a");
  e.add("b");
  expect(e.text).toBe("ab");
});

test("delete last character", () => {
  const e = new Editor();
  e.add("a");
  e.add("b");
  e.delete();
  expect(e.text).toBe("a");
});

test("undo add operation", () => {
  const e = new Editor();
  e.add("x");
  e.undo();
  expect(e.text).toBe("");
});

// ================================
// EDGE CASES
// ================================
test("delete on empty text", () => {
  const e = new Editor();
  e.delete();
  expect(e.text).toBe("");
});

test("undo on empty stack", () => {
  const e = new Editor();
  e.undo();
  expect(e.text).toBe("");
});

test("multiple undo operations", () => {
  const e = new Editor();
  e.add("a");
  e.add("b");
  e.delete();
  e.undo();
  e.undo();
  e.undo();
  expect(e.text).toBe("");
});