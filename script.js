"use strict";

window.addEventListener("load", displayModel);

const model = [];
let i = 0;

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function loop() {
  // queueSize
  // 40 “measurements”
  i++;
  let queueSize = getNumberOfCustomers();
  model.unshift(queueSize);
  displayModel();
  console.log(model.slice(1, 41));

  setTimeout(loop, 1000);
}

function displayModel() {
  for (let i = 0; i < 40; i++) {
    console.log("display loop " + i);
    let queueHeight = model[i] * 10 + "px";
    document.querySelector(`.bar${40 - i}`).setAttribute("style", `height: ${queueHeight}`);
  }
}
