const reg1 = /[a-z]/;
const reg2 = /[A-Z]/;
const reg3 = /\d/;
const reg4 = "!@#$%^&*()_-+=\|/.;:[]{}";

const inputTest = document.getElementById("input_test");
const blockCheck = document.getElementById("block_check");

inputTest.addEventListener('keyup', () => {

    let rating=0;

    const inputTestValue = inputTest.value;
    if (inputTestValue.match(reg1)) {
        rating++;
    }
    if (inputTestValue.match(reg2)) {
        rating++;
    }
    if (inputTestValue.match(reg3)) {
        rating++;
    }
    if (inputTestValue.indexOf(reg4)) {
        rating++;
    }

    let l=inputTestValue.length;

    if (l<6 && rating < 3) {
        blockCheck.style.width="10%";
        blockCheck.style.backgroundColor="#e7140d";
    }
    else if (l<6 && rating>=3) {
        blockCheck.style.width="50%";
        blockCheck.style.backgroundColor="#ffdb80";
    }
    else if (l>=8 && rating<3) {
        blockCheck.style.width="50%";
        blockCheck.style.backgroundColor="#ffdb80";
    }
    else if (l>=8 && rating >= 3) {
        blockCheck.style.width="100%";
        blockCheck.style.backgroundColor="#61ac27";
    }
    else if (l>=6 && rating == 1) {
        blockCheck.style.width="10%";
        blockCheck.style.backgroundColor="#e7140d";
    }
    else if (l>=6 && rating > 1 && rating < 4) {
        blockCheck.style.width="50%";
        blockCheck.style.backgroundColor="#ffdb80";
    }
    else if (l>=6 && rating == 4) {
        blockCheck.style.width="100%";
        blockCheck.style.backgroundColor="#61ac27";
    }

});