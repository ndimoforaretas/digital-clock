"use strict";

const clock = document.getElementById("clock");
const date = document.getElementById("date");
const body = document.body;

//create a function to pad numbers
function padNumber(num) {
  return num.toString().padStart(2, "0");
}

//create a function to update the clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Set the background color
  if (hours < 6 || hours >= 18) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }

  const timeString = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(
    seconds
  )}`;
  clock.textContent = timeString;
}

//call the function to update the clock every second
setInterval(updateClock, 1000);

//create a function to display the date
function displayDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; //months are zero based
  const day = now.getDate();

  const dateString = `${padNumber(day)}.${padNumber(month)}.${year}`;
  date.textContent = dateString;
}

//call the function to display the date
displayDate();
