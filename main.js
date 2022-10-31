const f_color = document.querySelector("#f-color");
const s_color = document.querySelector("#s-color");
const input_one = document.querySelector(".input-one");
const input_two = document.querySelector(".input-two");

input_one.oninput = (e) => {
  f_color.textContent = input_one.value;
  myFunction_set(input_one.value, "--f-color");
};

input_two.oninput = (e) => {
  s_color.textContent = input_two.value;
  myFunction_set(input_two.value, "--s-color");
};

// Get the root element
var r = document.querySelector(":root");

function myFunction_set(input_value, el) {
  r.style.setProperty(`${el}`, `${input_value}`);
}
