function date() {
    let men = ["Sausio","Vasario","Kovo","Balandžio","Gegužės","Birželio","Liepos","Rugpjūčio","Rugsėjo","Spalio","Lapkričio","Gruodžio"];
    let sav = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'];
    
    let myDate = new Date();
    let week = sav[myDate.getDay()];
    let day = myDate.getDate();
    let menuo = men[myDate.getMonth()];
    let year = myDate.getFullYear();
    document.getElementById("date").innerText = week + ", " + menuo + " " + day + ", " + year;
  }
  
  date();