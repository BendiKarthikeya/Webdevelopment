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
  const timeElements = document.getElementsByClassName("time"); // Collection of elements with class 'time'
  const today = document.getElementById("today");
  const body = document.body;

  if (checkBox.checked) {
    // Dark theme activated
    body.classList.add("bg-black", "text-white");
    for (let element of timeElements) {
      element.style.boxShadow = "6px 6px 12px purple";
    }
    today.style.boxShadow = "6px 6px 12px purple";
  } else {
    // Light theme activated
    body.classList.remove("bg-black", "text-white");
    for (let element of timeElements) {
      element.style.boxShadow = "6px 6px 12px black";
    }
    today.style.boxShadow = "6px 6px 12px black";
    updateBackgroundColor(); // Update the background color when switching back to light theme
  }
}

function updateBackgroundColor() {  
  const now = new Date();
  const hour = now.getHours();
  const body = document.body;

  let hue, saturation, lightness;

  // Daytime (6 AM - 6 PM)
  if (hour >= 6 && hour < 18) {
    body.classList.remove("text-white");
    body.classList.add("text-black");
    const progress = (hour - 6) / 12; // 0 at 6AM, 1 at 6PM
    hue = 30 + progress * 20; // Gradual color change from orange (30°) to yellow (50°)
    saturation = 100;
    lightness = 80 - Math.abs(progress - 0.5) * 40; // Lighter during midday, darker near morning/evening

    // Apply dynamic background color based on the time of day
    body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } else {
    // Nighttime (6 PM - 6 AM)
    body.classList.remove("text-black");
    body.classList.add("text-white");
    let nightProgress;
    if (hour >= 18) {
      nightProgress = (hour - 18) / 12; // 6PM–12AM → 0–0.5, 12AM–6AM → 0.5–1
    } else {
      nightProgress = (hour + 6) / 12; // for 12AM–6AM
    }

    // Transition from light black (charcoal) to pure black
    hue = 0; // No hue shift (we'll stick with dark tones)
    saturation = 0; // No color saturation
    lightness = 10 + (nightProgress * 50); // Light black starts at light gray (10%) and gets darker towards black (60%)

    // Apply night background color (light black to black)
    body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}

// Call this function once on page load
updateBackgroundColor();

// Optional: Set an interval to update the background color every minute (60,000ms)
setInterval(updateBackgroundColor, 60000);
