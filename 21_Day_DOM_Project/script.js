const challenges = document.querySelectorAll(".challenges");
const styledYear = document.getElementById("styledYear");
const dateElements = document.querySelectorAll(".date");
const doneTasks = document.querySelectorAll(".done");
const ongoingTasks = document.querySelectorAll(".ongoing");
const comingTasks = document.querySelectorAll(".coming");

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

//Year
setInterval(() => {
  styledYear.style.color = getRandomColor();
}, 1000);
//date
setInterval(() => {
  dateElements.forEach((date) => {
    date.style.backgroundColor = getRandomColor();
  });
}, 1000);
// Update date and time content
setInterval(() => {
  const currentDate = new Date();
  const dateTimeString = currentDate.toLocaleString();
  dateElements.forEach((date) => {
    date.textContent = dateTimeString;
  });
}, 1000);
//Done tasks GREEN
doneTasks.forEach((task) => {
  task.style.backgroundColor = "lightgreen";
});
//Ongoing tasks YELLOW
ongoingTasks.forEach((task) => {
  task.style.backgroundColor = "yellow";
});
//coming tasks RED
comingTasks.forEach((task) => {
  task.style.backgroundColor = "tomato";
});