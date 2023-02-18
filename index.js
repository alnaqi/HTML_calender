const monthEl = document.querySelector(".date h1")
const dateEl = document.querySelector(".date p")
const daysEl = document.querySelector(".days")

const months = ["January 1","February 2","March 3","April 4","May 5","June 6","July 7",
"August 8","September 9","October 10","November 11","December 12"];

const currentDate = new Date()

const monthInx = currentDate.getMonth();
const yearInx = currentDate.getFullYear();
const dateString = currentDate.toDateString()

const lastDay = new Date(yearInx, monthInx+1, 0).getDate()     // STAR
const firstDay = new Date(yearInx, monthInx, 1).getDay()     // STAR
const currentDay = new Date().getDate()

monthEl.innerHTML = months[monthInx]
dateEl.innerHTML = dateString

let days = ""

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`
}
for (let i = 1; i <= lastDay; i++) {
  if (currentDay == i) {
    days += `<div class="today">${i}</div>`
  }else{
    days += `<div>${i}</div>`
  }
}

daysEl.innerHTML = days