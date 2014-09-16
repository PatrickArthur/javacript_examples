function rectangleArea(length, height) {
    var area;
    area = length * height * 3.14159;
    return area;
}

function displayArea() {
    var l, h, rectArea;
    l = 52.05;
    h = 46.55;
    rectArea = rectangleArea(l, h);
    return rectArea;
}

displayArea();
