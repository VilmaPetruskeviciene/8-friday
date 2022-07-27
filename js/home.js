let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();

function myTime() {  
    document.getElementById('time').innerHTML = time;
    setTimeout(myTime, 1000);
}
myTime();

const men = ["Sausio","Vasario","Kovo","Balandžio","Gegužės","Birželio","Liepos","Rugpjūčio","Rugsėjo","Spalio","Lapkričio","Gruodžio"];
const sav = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'];
function myDate() {
    let date = sav[today.getDay()]+', '+men[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear();
    document.getElementById('date').innerHTML = date;
    setTimeout(myDate, 1000);
}
myDate();

function myday(time) {
    if (time >= 00 && time < 12) {
        return 'Good mornig, '+'<br>'+'Vilma';
    } else if (time >= 12 && time < 17) {
        return 'Good afternoon, '+'<br>'+'Vilma';
    } 
        return 'Good evening, '+'<br>'+'Vilma';
}
document.getElementById('hello').innerHTML = myday(time);