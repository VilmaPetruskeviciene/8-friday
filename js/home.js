let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();
document.getElementById('time').innerHTML = time;

const men = ["Sausio","Vasario","Kovo","Balandžio","Gegužės","Birželio","Liepos","Rugpjūčio","Rugsėjo","Spalio","Lapkričio","Gruodžio"];
const sav = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'];
let today2 = new Date();
let date = (sav[today2.getDay()])+', '+(men[today2.getMonth()])+' '+today2.getDate()+', '+today2.getFullYear();
document.getElementById('date').innerHTML = date;
