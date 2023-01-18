//<button id="one">Button 1</button>
//<button id="two">Button 2</button>

// Question:
var one = document.querySelector("#one");
getElementById("one");
var two = document.querySelector("#two");
getElementById("two");
function callBackExample() {
  one.removeEventListener("", callBackExample);
}
one.addEventListener("click", function () {
  two.remove();
  console.log(two); // will print the html even after deletion
});
two.addEventListener("click", function () {
  one.remove();
  console.log(one); // will print the html even after deletion
});

// answer:
var one = document.querySelector("#one");
var two = document.querySelector("#two");

function callbackOne() {
  var two = document.querySelector("#two");
  if (!two) return;
  two.remove();
  one.removeEventListener("hover", callbackOne);
}

function callbackTwo() {
  var one = document.querySelector("#one");
  if (!one) return;
  one.remove();
  two.removeEventListener("hover", callbackTwo);
}
one.addEventListener("click", callbackOne);
two.addEventListener("click", callbackTwo);
