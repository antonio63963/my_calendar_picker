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

// function getWeekDay(date) {
//   return weekDays[date.getDay()];
// }

function getDateObj(year, monthIndex, dateDay) {
  const date = new Date(year, monthIndex, dateDay);
  return {
    date: date.getDate(),
    monthIndex: date.getMonth(),
    year: date.getFullYear(),
    weekDayIndex: date.getDay(),
  };
}

const currentDate = new Date();

function getMonthDays(year, month) {
  const firstWeekDayIndex = new Date(year, month - 1, 1).getDay();
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
  for (let i = 0; i < lastMonthDay + nexMonthDaysAmount; i++) {
    calendarMonthDays.push(getDateObj(year, month - 1, 1 + i));
  }
  console.log("Month days: ", calendarMonthDays);
  return calendarMonthDays;
}

function insertDates(year, month) {
  const row_1 = document.querySelector(".calendar__row-1");
  const row_2 = document.querySelector(".calendar__row-2");
  const row_3 = document.querySelector(".calendar__row-3");
  const row_4 = document.querySelector(".calendar__row-4");
  const row_5 = document.querySelector(".calendar__row-5");

  function createDateElement(date) {
    const dateContainer = document.createElement("div");
    dateContainer.classList.add('date-container');
    const dateBg = document.createElement("div");
    const dateValue = document.createElement("span");
    dateValue.textContent = date.date;
    dateBg.classList.add("date-container__bg");
    dateBg.appendChild(dateValue);
    dateContainer.appendChild(dateBg);
    return dateContainer;
  }

  getMonthDays(year, month).forEach((date, idx) => {
    row_1.appendChild(createDateElement(date));
    // if (idx < 7) {
    //   row_1.appendChild(createDateElement(date));
    // }else if(idx >= 7 && idx < 14) {
    //   row_2.appendChild(createDateElement(date));
    // }else if(idx >= 14 && idx < 21) {
    //   row_3.appendChild(createDateElement(date));
    // }else if(idx >= 21 && idx < 28) {
    //   row_4.appendChild(createDateElement(date));
    // }else if(idx >= 28 && idx < 35) {
    //   row_5.appendChild(createDateElement(date));
    // }
  });
}

insertDates(2024, 3)
