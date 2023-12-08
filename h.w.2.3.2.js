class Button {
  constructor(type, color, width, height) {
    this.type = type;
    this.color = color;
    this.width = width;
    this.height = height;
  }
  onClick() {
    console.log(this.type, this.color, this.width, this.height);
  }
}
let greenButton = new Button("button", "green", 15, 10);
greenButton.onClick();

let testButton = new Button();
if (testButton === greenButton);
console.log(greenButton instanceof Button);

//вариант 2

class Button {
  constructor(type, color, width, height) {
    this.type = type;
    this.color = color;
    this.width = width;
    this.height = height;
  }
  onClick() {
    console.log(this.type, this.color, this.width, this.height);
  }
}
let greenButton = new Button("submit", "green", 15, 10);
greenButton.onClick();

function testButton(someButton) {
  if (someButton instanceof Button) {
    console.log("greenButton is instance of Button");
  } else {
    console.log("something went wrong");
  }
}
testButton(greenButton);
