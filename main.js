const f_color = document.querySelector("#f-color");
const s_color = document.querySelector("#s-color");
const input_one = document.querySelector(".input-one");
const input_two = document.querySelector(".input-two");
const select_dir = document.querySelector("#dir");
const dir_number = document.querySelector("#dir-number");

select_dir.addEventListener("input", () => {
  let value = select_dir.value;
  if (value == "") {
    dir_number.textContent = "0";
    myFunction_set(`0deg`, "--dir");
    value = 0;
  } else {
    switch (value) {
      case "90":
        dir_number.textContent = "to right";
        myFunction_set(`to right`, "--dir");
        break;
      case "180":
        dir_number.textContent = "to bottom";
        myFunction_set(`to bottom`, "--dir");
        break;
      case "270":
        dir_number.textContent = "to left";
        myFunction_set(`to left`, "--dir");
        break;
      case "360":
        dir_number.textContent = "to top";
        myFunction_set(`to top`, "--dir");
        break;
      case "0":
        dir_number.textContent = "to top";
        myFunction_set(`to top`, "--dir");
        break;
      default:
        dir_number.textContent = `${value}deg`;
        myFunction_set(`${value}deg`, "--dir");
    }

    // if (value == "90") {
    //   dir_number.textContent = "to right";
    //   myFunction_set(`to right`, "--dir");
    // } else if (value == "180") {
    //   dir_number.textContent = "to bottom";
    //   myFunction_set(`to bottom`, "--dir");
    // } else if (value == "360") {
    //   dir_number.textContent = "to top";
    //   myFunction_set(`to top`, "--dir");
    // } else {
    // dir_number.textContent = `${value}deg`;
    // myFunction_set(`${value}deg`, "--dir");
    // }
  }
});

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
