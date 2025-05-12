window.onload = function() {
            updateDate();
            updateTime();
        };
function updateTime(){
    const now=new Date();
    // const timeShow=now.toLocaleTimeString();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    const amPm=document.getElementById("amPm");

    if(parseInt(hours)<10){
            document.getElementById("hours").textContent="0"+hours;
    }
    else{
        document.getElementById("hours").textContent=hours;
    }
    if(parseInt(minutes)<10){
            document.getElementById("minutes").textContent="0"+minutes;
    }
    else{
        document.getElementById("minutes").textContent=minutes;
    }
    if(parseInt(seconds)<10){
            document.getElementById("seconds").textContent="0"+seconds;
    }
    else{
        document.getElementById("seconds").textContent=seconds;
    }
    if(parseInt(hours)>=12){
        amPm.textContent="PM";
    }
    else{
        amPm.textContent="AM";
    }
}   

function updateDate(){
    const now=new Date();
    const day=now.getDay();
    const date=now.getDate();
    const month=now.getMonth()+1;
    const year=now.getFullYear();
    if(parseInt(date)<10){
            document.getElementById("date").textContent="0"+date;
    }
    else{
        document.getElementById("date").textContent=date;
    }
    if(parseInt(month)<10){
            document.getElementById("month").textContent="0"+month;
    }
    else{
        document.getElementById("month").textContent=month;
    }
    document.getElementById("year").textContent=year;
}
setInterval(updateTime,1000);