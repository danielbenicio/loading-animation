const progress = document.querySelector('.progress');
const percent = document.querySelector('.percent');
let count = 3;
let x = 16;

const loading = setInterval(animate, 20);

function animate() {
    if(x == 400)
        clearInterval(loading);
    else
        x += 4;
        count++;
        progress.style.width = `${x}px`;
        percent.innerHTML = `${count}%`;
}