let date = document.getElementById('date');
let day = document.getElementById('day');
let mounth = document.getElementById('mounth');
let year = document.getElementById('year');

const toDay = new Date();


const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const allMounths = ['January','February','March','April','May','June','July','August','September','October','November','December'];


date.innerHTML = (toDay.getDate() < 10? '0' : '') + toDay.getDate();
day.innerHTML = weekDays[toDay.getDay()];
mounth.innerHTML = allMounths[toDay.getMonth()];
year.innerHTML = toDay.getFullYear();