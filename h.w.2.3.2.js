class Button {
  constructor(type, color, width, height) {
    this.type = type;
    this.color = color;
    this.width = width;
    this.height = height;
  }
  onClick() {
    console.log();
  }
}
let greenButton = new Button("button", "green", 15, 10);
console.log(greenButton);

testButton = {
  type: "button",
  color: "green",
  width: 15,
  height: 10,
};

if ((greenButton = testButton)) {
  console.log(true);
} else {
  console.log(false);
}
