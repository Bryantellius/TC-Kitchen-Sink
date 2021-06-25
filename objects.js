const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class Color {
  constructor(name, shade) {
    this.name = name;
    this.shade = shade;
  }
}

class Rainbow {
  constructor() {
    this.colors = [];
    this.length = 0;
  }

  addColor(color) {
    this.colors.push(color);
    this.length++;
  }
}

var rainbow = new Rainbow();

colors.forEach(function (value) {
  let color = new Color(value, 5);
  rainbow.addColor(color);
});
