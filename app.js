let play = (str) => {
    let audio = document.getElementById(str)
    audio.play();
   
    if (str === "q" | str === "Q") {
        document.getElementById('display').innerHTML = "Kick"
    } else if (str === "e" | str === "E") {
        document.getElementById('display').innerHTML = "Snare"
    } else if (str === "w" | str === "W") {
        document.getElementById('display').innerHTML = "Rim Shot"

    } else if (str === "a" | str === "A") {
        document.getElementById('display').innerHTML = "Shaker"

    } else if (str === "s" | str === "S") {
        document.getElementById('display').innerHTML = "Open Hi Hat"

    } else if (str === "d" | str === "D") {
        document.getElementById('display').innerHTML = "Closed Hi Hat"

    } else if (str === "z" | str === "Z") {
        document.getElementById('display').innerHTML = "Hit #1"

    } else if (str === "x" | str === "X") {
        document.getElementById('display').innerHTML = "Hit #2"
    } else if (str === "c" | str === "C") {
        document.getElementById('display').innerHTML = "Hit #3"
    } 
}

document.onkeyup = (e) => {
    let keystroke = e.key;
    if (keystroke === "q" | keystroke === "Q") {
    play('Q');
} else if (keystroke === "e" | keystroke === "E") {
    play('E');
} else if (keystroke === "w" | keystroke === "W") {
    play('W');
} else if (keystroke === "a" | keystroke === "A") {
    play('A');
} else if (keystroke === "s" | keystroke === "S") {
    play('S');
} else if (keystroke === "d" | keystroke === "D") {
    play('D');
} else if (keystroke === "z" | keystroke === "Z") {
    play('Z');
} else if (keystroke === "x" | keystroke === "X") {
    play('X');
} else if (keystroke === "c" | keystroke === "C") {
    play('C');
} 
}