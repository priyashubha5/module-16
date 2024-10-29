show();
onEvent("up_arrow", "click", function () {
  show();
  penUp();
  move(0, -10);
});
onEvent("Down_arrow", "click", function () {
  show();
  penUp();
  move(0, 10);
});
onEvent("Left_Arrow", "click", function () {
  show();
  penUp();
  move(-10, 0);
});
onEvent("right_Arrow", "click",   {
  show();
  penUp();
  move(10, 0);
});
onEvent("draw_button", "click", function () {
  penDown();
  penColor(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255), 0.5));
  penWidth(randomNumber(2, 5));
  getText("dropdown-geometricshapes")();
});
function Arc() {
  setText("label_size_and_turn", "Slider to choose size ");
  arcRight(90, getNumber("slider-width-height") / 2);
}
function Circle() {
  setText("label_size_and_turn", "Slider to choose size ");
  arcRight(360, getNumber("slider-width-height") / 2);
}
function Triangle() {
  setText("label_size_and_turn", "Slider to choose size ");
  turnRight(90);
  moveForward(getNumber("slider-width-height"));
  turnLeft(120);
  moveForward(getNumber("slider-width-height"));
  turnLeft(120);
  moveForward(getNumber("slider-width-height"));
}
function Square() {
  setText("label_size_and_turn", "Slider to choose size ");
  moveForward(getNumber("slider-width-height"));
  turnRight(90);
  moveForward(getNumber("slider-width-height"));
  turnRight(90);
  moveForward(getNumber("slider-width-height"));
  turnRight(90);
  moveForward(getNumber("slider-width-height"));
  turnRight(90);
}
function Rectangle() {
  setText("label_size_and_turn", "Slider to choose size ");
  moveForward(getNumber("slider-width-height"));
  turnRight(90);
  moveForward(getNumber("slider-width-height") / 2.3);
  turnRight(90);
  moveForward(getNumber("slider-width-height"));
  turnRight(90);
  moveForward(getNumber("slider-width-height") / 2.3);
  turnRight(90);
}
function Turn() {
  setText("label_size_and_turn", "Degrees for turn ");
  turnRight(getNumber("slider-width-height"));
}
function Spiral() {
  setText("label_size_and_turn", "Slider to choose size ");
  arcRight(360, getNumber("slider-width-height"));
  penUp();
  move(5, 0);
  penDown();
  arcRight(360, getNumber("slider-width-height") - 5);
  penUp();
  move(5, 0);
  penDown();
  arcRight(360, getNumber("slider-width-height") - 10);
}
function Free_draw() {
  setText("label_size_and_turn", "Slider to choose size ");
  moveForward(getNumber("slider-width-height"));
}
onEvent("erase_button", "click", function () {
  penDown();
  penColor(getProperty("screen1", "background-color"));
  dot(500);
});
