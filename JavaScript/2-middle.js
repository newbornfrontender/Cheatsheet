'use strict';

const adder = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
});

const Adder = class {
  constructor(initial = 0) {
    this.steps = [initial];
    this.value = initial;
  }

  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
};

// Usage

{
  const { value, steps } = adder(5).add(-8).add(11).add(1);
  console.log(value);
  const [a, b, c, d] = steps;
  console.log(a, b, c, d);
}

{
  const { value, steps } = new Adder(5).add(-8).add(11).add(2);
  console.log(value);
  const [a, b, c, d] = steps;
  console.log(a, b, c, d);
}
