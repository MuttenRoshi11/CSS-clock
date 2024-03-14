const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
const date = new Date();
const seconds = date.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;

const minutes = date.getMinutes();
const minutesDegrees = ((minutes / 60) *360) + 90;

const hours = date.getHours();
const hoursDegrees = ((hours / 12) * 360) + 90;

secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
minHand.style.transform = `rotate(${minutesDegrees}deg)`;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


console.log(seconds);
};

setInterval(setDate, 1000);