let grades =  359;
let amount = 5;
let tone = (360 / amount);

function randomPalette() {
	let randomValue = Math.floor(Math.random() * 360);
    let colors = [];

    for (let i = 0; i < amount; i++) {
        let hue = randomValue / grades;
        let rgb = hslToRgb(hue, 0.5, 0.5);
        colors.push(rgbToHex(rgb[0], rgb[1], rgb[2]));
        randomValue = diferentialSum(randomValue);
    }

    generateRules(colors);
}

function diferentialSum(randomValue) {
    if ((randomValue + tone) > grades) {
        randomValue = ((randomValue + tone) - grades);
    } else {
        randomValue = randomValue + tone;
    }
    return randomValue;
}

function cleanPalette(){
    let white = "#FFFFFF";
    colors = [white, white, white, white, white];
    editRulesAndColors(colors);
}

function generateRules(colors){
    editRulesAndColors(colors);
}

function editRulesAndColors(colors){
    var reglas = [];
    reglas.push("\n.website-background{ color: " + colors[0] + ";}\n");
    reglas.push(".element-text{ color: " + colors[1] + ";}\n");
    reglas.push(".element-border{ border-color: " + colors[2] + ";}\n");
    reglas.push(".element-background{ background-color: " + colors[3] + ";}\n");
    reglas.push(".header{ color: " + colors[4] + ";}");
    $("#css-rules").val(reglas.join("\n"));

    $("#color1").css("background-color", colors[0]);
    $("#color2").css("background-color", colors[1]);
    $("#color3").css("background-color", colors[2]);
    $("#color4").css("background-color", colors[3]);
    $("#color5").css("background-color", colors[4]);
}