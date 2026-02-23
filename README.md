// ================================
// 1. Text Operation Representation
// ================================
// Each operation is stored as an object:
// { op: "add" | "del", c: character }
class Editor {
  constructor() {
    // ================================
    // Stores the current text
    // ================================
    this.text = "";

    // ================================
    // Stack to track all operations
    // (Last In, First Out)
    // ================================
    this.history = [];
  }

  // ================================
  // 2. Add Text
  // Adds a character and records it
  // ================================
  add(c) {
    this.text += c;                       // update text
    this.history.push({ op: "add", c });  // record add operation
  }

  // ================================
  // 3. Delete Text
  // Deletes last character and records it
  // ================================
  delete() {
    if (!this.text) return;               // nothing to delete
    const c = this.text.at(-1);           // get last character
    this.text = this.text.slice(0, -1);   // remove it
    this.history.push({ op: "del", c });  // record delete operation
  }

  // ================================
  // 4. Undo Operation
  // Reverts the last operation using stack
  // ================================
  undo() {
    if (!this.history.length) return;     // nothing to undo
    const last = this.history.pop();      // get last operation

    // Reverse the operation
    if (last.op === "add") {
      this.text = this.text.slice(0, -1);
    } else {
      this.text += last.c;
    }
  }
}

module.exports = Editor;