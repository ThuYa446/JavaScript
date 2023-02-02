const newYear = '1 Jan 2024';
const months = document.getElementById("months")
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate= new Date();
    const totalsecond = (newYearDate-currentDate)/1000;
    const month = Math.floor(totalsecond/3600/24/30);
    const day = Math.floor(totalsecond/3600/24);
    const hour = Math.floor(totalsecond/3600 % 24);
    const minute = Math.floor(totalsecond/60) % 60;
    const second = Math.floor(totalsecond % 60);
    months.innerHTML = month;
    days.innerHTML = day;
    hours.innerHTML = timeformat(hour);
    minutes.innerHTML = timeformat(minute);
    seconds.innerHTML = timeformat(second);
}

function timeformat(time){
    return time <10? '0'+time:time;
}

countdown();
setInterval(countdown,1000);