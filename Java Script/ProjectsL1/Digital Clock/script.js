window.onload = function() {
            updateDate();
            updateTime();
            updateBackgroundColor();
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

setInterval(updateTime,1000);

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

function changeTheme() {
  const checkBox = document.getElementById("ThemeCheckBox");
  const timeElements = document.getElementsByClassName("time"); 
  const today = document.getElementById("today");
  const body = document.body;

  if (checkBox.checked) {
    body.classList.add("bg-black", "text-white");
    for (let element of timeElements) {
      element.style.boxShadow = "6px 6px 12px purple";
    }
    today.style.boxShadow = "6px 6px 12px purple";
  } else {
    body.classList.remove("bg-black", "text-white");
    for (let element of timeElements) {
      element.style.boxShadow = "6px 6px 12px black";
    }
    today.style.boxShadow = "6px 6px 12px black";
    updateBackgroundColor(); 
  }
}

function updateBackgroundColor() {  
  const now = new Date();
  const hour = now.getHours();
  
  const body = document.body;

  let hue, saturation, lightness;

  if (hour >= 6 && hour < 18) {
    body.classList.remove("text-white");
    body.classList.add("text-black");
    const progress = (hour - 6) / 12;
    hue = 30 + progress * 20; 
    saturation = 100;
    lightness = 80 - Math.abs(progress - 0.5) * 40; 
    body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } 

  else {
    // Nighttime (6 PM - 6 AM)
    body.classList.remove("text-black");
    body.classList.add("text-white");
    let nightProgress;
    if (hour >= 18) {
      nightProgress = (hour - 18) / 12; 
    } else {
      nightProgress = (hour + 6) / 12; 
    }
    hue = 0; 
    saturation = 0; 
    lightness = 10 + (nightProgress * 50); 
    body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}
setInterval(updateBackgroundColor, 60000);
