let j = 0;
const color = ['red', 'blue', 'green'];

setInterval(() => {
    const boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        element.style.backgroundColor = color[j % 3];
        j++;
    });
    j--;
}, 1000);
