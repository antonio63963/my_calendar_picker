const monthes = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month, 0); // date from next month
  return date.getDate();
}

function getWeekDay(date) {
  return weekDays[date.getDay()];
}

function getDateObj(year, monthIndex, dateDay) {
  const date = new Date(year, monthIndex, dateDay);
  return {
    date: date.getDate(),
    monthIndex: date.getMonth(),
    year: date.getFullYear(),
    weekDayIndex: date.getDay(),
  };
}

const getWeekDayIndex = (date) => date.getDay();

console.log("last: ", getLastDayOfMonth(2024, 3));
console.log("first: ", weekDays[new Date(2024, 2, 1).getDay()]);

const currentDate = new Date();

function getMonthDays(year, month) {
  const firstWeekDayIndex = new Date(year, month - 1, 1).getDay();
  const lastWeekDayIndex = new Date(
    year,
    month - 1,
    getLastDayOfMonth(year, month)
  ).getDay();

  const calendarMonthDays = [];
  if (firstWeekDayIndex > 0) {
    const lastPrevMonthDate = getLastDayOfMonth(year, month - 1);
    const prevMonthIndex = month - 2;
    for (let i = 0; i < firstWeekDayIndex - 1; i++) {
      calendarMonthDays.push(
        getDateObj(year, prevMonthIndex, lastPrevMonthDate - i)
      );
    }
  }
  // month days
  const lastMonthDay = getLastDayOfMonth(year, month);
  const nexMonthDaysAmount = 35 - lastMonthDay - calendarMonthDays.length;
  const striclyMonthDays = [];
  for (let i = 0; i < lastMonthDay + nexMonthDaysAmount; i++) {
    striclyMonthDays.push(getDateObj(year, month - 1, 1 + i));
  }
  console.log(calendarMonthDays);
  console.log("Month days: ", calendarMonthDays.concat(striclyMonthDays));
  return calendarMonthDays.concat(striclyMonthDays);
}
getMonthDays(2024, 4);
