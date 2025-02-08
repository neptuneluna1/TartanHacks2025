//for workout:
function createWorkout() {
    let text1 = "400 free warm-up!! 4x100 free @90 seconds (focus on breathing technique)!! 4x50 free @60 seconds (build pace, focus on form)!! 3x75 free @90 seconds (1st length steady, 2nd length build, 3rd length sprint)!! 2x100 free with fins @90 seconds (help maintain speed)!! 4x25 free @30 seconds (sprint)!! 200 free warm-down";
    let lines = text1.split("!!");
    let amtTop = 300;

    lines.forEach((line, i) => {
        const element = document.createElement("div");
        element.textContent = line;
        element.id = `workout${i}`;
        document.getElementById("workout").appendChild(element);
        element.style.position = "absolute";
        let newtop = amtTop + (25*i);
        let topp = newtop.toString();
        element.style.top = topp + "px";
        element.style.color = "var(--black)";
        element.style.textAlign = "center";
    });
}

createWorkout();