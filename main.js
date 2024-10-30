function changecolor() {
    let red = 1;
    let green = 1;
    let blue = 1;
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    console.log(color);
    document.getElementById("colorflipper").style.backgroundColor=color;
}