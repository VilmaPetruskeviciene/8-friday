function myTime() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();  
  document.getElementById('time').innerHTML = time;
  setTimeout(myTime, 1000);
}

myTime();
