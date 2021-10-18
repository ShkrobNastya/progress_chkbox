const progress = document.querySelector('.progress');
// 
const circle = document.querySelector(".progress-rind__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
//

window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let per = windowScroll/windowHeight*100;
    progress.style.width=`${per}%`;
    // 
    setProgress(per);
}

function setProgress(per) {
    const offset = circumference -per/100 * circumference;
    circle.style.strokeDashoffset = offset;
}

