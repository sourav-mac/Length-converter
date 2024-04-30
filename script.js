function convertLength() {
    var value = parseFloat(document.getElementById("value").value);
    var unit = document.getElementById("unit").value;
    var result = "";

    if (unit === "Feet") {
        result = Feet(value);
    } else if (unit === "Meters") {
        result = Meters(value);
    } else if (unit === "Inches") {
        result = Inches(value);
    } else if (unit === "cm") {
        result = cm(value);
    } else if (unit === "Yards") {
        result = Yards(value);
    } else if (unit === "Kilometers") {
        result = Kilometers(value);
    } else if (unit === "Miles") {
        result = Miles(value);
    }

    document.getElementById("result").innerHTML = result;
}
function Feet(ft){
    return "Meters: " + (ft/3.2808).toFixed(3) + "<br>" +
           "Inches: " + (ft*12).toFixed(3) + "<br>" +
           "Centimeters: " + (ft/0.032808).toFixed(3) + "<br>" +
           "Yards: " + (ft*0.33333).toFixed(3) + "<br>" +
           "Kilometers: " + (ft/3280.8).toFixed(5) + "<br>" +
           "Miles: " + (ft*0.00018939).toFixed(5) + "<br>";
}

function Meters(m){
    var ft = m * 3.2808;
    return "Feet: " + ft.toFixed(3) + "<br>" +
           "Inches: " + (ft * 12).toFixed(3) + "<br>" +
           "Centimeters: " + (m / 0.01).toFixed(3) + "<br>" +
           "Yards: " + (m * 1.0936).toFixed(3) + "<br>" +
           "Kilometers: " + (m / 1000).toFixed(5) + "<br>" +
           "Miles: " + (m * 0.00062137).toFixed(5) + "<br>";
}

function Inches(inc){
    var ft = inc * 0.083333;
    return "Feet: " + ft.toFixed(3) + "<br>" +
           "Meters: " + (inc / 39.370).toFixed(3) + "<br>" +
           "Centimeters: " + (inc / 0.39370).toFixed(3) + "<br>" +
           "Yards: " + (inc * 0.027778).toFixed(3) + "<br>" +
           "Kilometers: " + (inc / 39370).toFixed(5) + "<br>" +
           "Miles: " + (inc * 0.000015783).toFixed(5) + "<br>";
}

function cm(c){
    var ft = c * 0.032808;
    return "Feet: " + ft.toFixed(3) + "<br>" +
           "Meters: " + (c / 100).toFixed(3) + "<br>" +
           "Inches: " + (c * 0.39370).toFixed(3) + "<br>" +
           "Yards: " + (c * 0.010936).toFixed(3) + "<br>" +
           "Kilometers: " + (c / 100000).toFixed(5) + "<br>" +
           "Miles: " + (c * 0.0000062137).toFixed(5) + "<br>";
}

function Yards(yd){
    var ft = yd * 3;
    return "Feet: " + ft.toFixed(3) + "<br>" +
           "Meters: " + (yd / 1.0936).toFixed(3) + "<br>" +
           "Inches: " + (yd * 36).toFixed(3) + "<br>" +
           "Centimeters: " + (yd / 0.010936).toFixed(3) + "<br>" +
           "Kilometers: " + (yd / 1093.6).toFixed(5) + "<br>" +
           "Miles: " + (yd * 0.00056818).toFixed(5) + "<br>";
}

function Kilometers(km){
    var ft = km * 3280.8;
    return "Feet: " + ft.toFixed(3) + "<br>" +
           "Meters: " + (km * 1000).toFixed(3) + "<br>" +
           "Inches: " + (km * 39370).toFixed(3) + "<br>" +
           "Centimeters: " + (km * 100000).toFixed(3) + "<br>" +
           "Yards: " + (km * 1093.6).toFixed(5) + "<br>" +
           "Miles: " + (km * 0.62137).toFixed(5) + "<br>";
}

function Miles(mi){
    var ft = mi * 5280;
    return "Feet: " + ft.toFixed(3) + "<br>" +
           "Meters: " + (mi / 0.00062137).toFixed(3) + "<br>" +
           "Inches: " + (mi * 63360).toFixed(3) + "<br>" +
           "Centimeters: " + (mi / 0.0000062137).toFixed(3) + "<br>" +
           "Yards: " + (mi * 1760).toFixed(5) + "<br>" +
           "Kilometers: " + (mi / 0.62137).toFixed(5) + "<br>";
}



