function myTime() {
  let today = new Date();
  if (today.getHours() < 10 && today.getMinutes() < 10) {
    let time = "0" + today.getHours() + ":" + "0" + today.getMinutes();  
    document.getElementById('time').innerHTML = time;
    setTimeout(myTime, 1000);
  } else {
    let time = today.getHours() + ":" + today.getMinutes();  
    document.getElementById('time').innerHTML = time;
    setTimeout(myTime, 1000);
  }
}

myTime();
