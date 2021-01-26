const runner = document.getElementById("runner");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    
    if (runner.classList != "jump") {
        runner.classList.add("jump")
    }
    setTimeout( function() {
        runner.classList.remove("jump")
    }, 300)

}

let isAlive = setInterval ( function() {
    let runnerTop = parseInt(window.getComputedStyle(runner).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

if (cactusLeft < 50 && cactusLeft > 0 && runnerTop >= 140) {
    alert("game over")
}
}, 10) 