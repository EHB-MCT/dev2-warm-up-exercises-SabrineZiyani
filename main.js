import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
function warmup1() {
    console.log("Exercise week 1");


    const textnaam = document.querySelector("#content-1 p");
    const button = document.querySelector("#button-1a");
    button.addEventListener('click', function () {
        textnaam.textContent = "Hallo, dit is de oefening van Sabrine";
    });


    const button = document.querySelector("#button-1b");



}

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}