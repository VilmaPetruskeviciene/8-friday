let time = new Date();
if(time.getHours() < 12)
document.write("<h2>Good Morning,</h2>");
else if(time.getHours() < 18)
document.write("<h2>Good Afternoon,</h2>");
else 
document.write("<h2>Good Evening,</h2>");

function hello() {
    let time = new Date();
    if (time.getHours() < 12) {
        document.getElementById('hello').innerText = "Good mornig, ";
    } else if (time.getHours() < 18) {
        document.getElementById('hello').innerText = "Good afternoon, ";
    } else {
        document.getElementById('hello').innerText = "Good evening, ";
    }
}

hello();