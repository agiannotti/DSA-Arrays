class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }
  // reserves a contiguous block of memory consisting of size boxes
  // returns pointer to 1st box or null if allocation fails
  allocate(size) {
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }
  // frees the block of memory reserved using allocate
  free(ptr) {}
  // copies size boxes of data from the 'from' ptr to the 'to' ptr

  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }
  // (ptr: pointer i.e. variables containing memory adresses)

  // returns the value stored at a certain memory address
  get(ptr) {
    return this.memory[ptr];
  }
  // set the value at a certain memory adress
  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;
