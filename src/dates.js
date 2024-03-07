let today = new Date();
let myYear = today.getFullYear();
let myMonth = today.getMonth();
let myDay = today.getDate();

let dayFirstTask, monthFirstTask, yearFistTask;
let daySecondTask, monthSecondTask, yearSecondTask;
let dayThirdTask, monthThirdTask, yearThirdTask;

[yearFistTask, yearSecondTask, yearThirdTask] = [myYear, myYear, myYear];

if (myDay <= 15) {
  dayFirstTask = myDay + 6;
  daySecondTask = myDay + 8;
  dayThirdTask = myDay + 4;
} else {
  dayFirstTask = myDay - 6;
  daySecondTask = myDay - 8;
  dayThirdTask = myDay - 4;
}

if (myMonth <= 7) {
  monthFirstTask = myMonth + 3;
  monthSecondTask = myMonth + 1;
  monthThirdTask = myMonth + 2;
} else if (myMonth <= 9) {
  monthFirstTask = myMonth + 3;
  monthSecondTask = myMonth + 1;
  monthThirdTask = myMonth + 2;
} else {
  monthFirstTask = 3;
  yearFistTask += 1;
  monthSecondTask = 1;
  yearSecondTask += 1;
  monthThirdTask = 2;
  yearThirdTask += 1;
}

let dateTaskOne = monthFirstTask + "/" + dayFirstTask + "/" + yearFistTask;
let dateTaskTwo = monthSecondTask + "/" + daySecondTask + "/" + yearSecondTask;
let dateTaskThree = monthThirdTask + "/" + dayThirdTask + "/" + yearThirdTask;

export { dateTaskOne, dateTaskTwo, dateTaskThree };
