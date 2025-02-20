import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup2();
function warmup1() {
    console.log("Exercise week 1");

    document.querySelector("#button-1a").addEventListener("click", () => {
        document.querySelector("#content-1 p").textContent = "Hallo, dit is de oefening van Sabrine";
    });

    document.querySelector("#button-1b").addEventListener("click", () => {
        document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });

    document.querySelector("#button-1c").addEventListener("click", () => {
        document.querySelector("#content-1 p").textContent = "Ik ben er klaar voor!";
    });

}




function warmup2() {
    console.log("Exercise week 2");


    let scores = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    const content = document.getElementById("content-2");

    document.getElementById("button-2a").addEventListener("click", () => {
        content.innerHTML = `<p>Scores: ${scores.join(", ")}</p>`;
    });

    document.getElementById("button-2b").addEventListener("click", () => {
        content.innerHTML = `<p>Sorted: ${scores.sort((a, b) => a - b).join(", ")}</p>`;
    });

    document.getElementById("button-2c").addEventListener("click", () => {
        content.innerHTML = `<p>Sum: ${scores.reduce((a, b) => a + b, 0)}</p>`;
    });

}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}