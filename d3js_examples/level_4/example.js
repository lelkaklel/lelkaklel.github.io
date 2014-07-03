
var body = d3.select("body");

// рисуем круг

var svg_circle = body.append('svg')  // создаем svg-холст
    .attr("width", 100)  // с заданной шириной
    .attr("height", 100)  // и высотой
    .style("background-color", "beige");  // устанавливаем цвет заливки холста

svg_circle.append("circle")
    .attr("cx", 50)  // координата центра по оси x, относительно svg-холста
    .attr("cy", 50)  // координата центра по оси y, относительно svg-холста
    .attr("r", 40)  // радиус круга
    .style("fill", "coral");  // раскрашиваем круг

// рисуем прямоугольник

var svg_rect = body.append('svg')  // создаем svg-холст
    .attr("width", 100)  // с заданной шириной
    .attr("height", 100)  // и высотой
    .style("background-color", "beige");  // устанавливаем цвет заливки холста

svg_rect.append("rect")
    .attr("x", 5)  // координата левого верхнего угла по оси x, относительно svg-холста
    .attr("y", 20)  // координата левого верхнего угла по оси y, относительно svg-холста
    .attr("width", 90)  // ширина
    .attr("height", 60)  // высота
    .style("fill", "coral");  // раскрашиваем

// рисуем прямоугольник со скругленными краями и без заливки

var svg_rect2 = body.append('svg')  // создаем svg-холст
    .attr("width", 100)  // с заданной шириной
    .attr("height", 100)  // и высотой
    .style("background-color", "beige");  // устанавливаем цвет заливки холста

svg_rect2.append("rect")
    .attr("x", 5)  // координата левого верхнего угла по оси x, относительно svg-холста
    .attr("y", 20)  // координата левого верхнего угла по оси y, относительно svg-холста
    .attr("width", 90)  // ширина
    .attr("height", 60)  // высота
    .attr("rx", 10)  // радиус скругления краев
    .attr("ry", 10)  // радиус скругления краев
    .style("stroke", "coral")
    .style("stroke-width", 5)  // задаем ширину линии
    .style("fill", "none");  // раскрашиваем

// рисуем прямую линию

var svg_line = body.append('svg')  // создаем svg-холст
    .attr("width", 100)  // с заданной шириной
    .attr("height", 100)  // и высотой
    .style("background-color", "beige");  // устанавливаем цвет заливки холста

svg_line.append("line")
    .attr("x1", 10)
    .attr("y1", 10)
    .attr("x2", 90)
    .attr("y2", 90)
    .style("stroke-width", 5)  // задаем ширину линии
    .style("stroke", "coral");  // раскрашиваем

// рисуем ломаную линию

var svg_polyline = body.append('svg')  // создаем svg-холст
    .attr("width", 100)  // с заданной шириной
    .attr("height", 100)  // и высотой
    .style("background-color", "beige");  // устанавливаем цвет заливки холста

svg_polyline.append("polyline")
    .attr("points", "10,10 90,10 10,90 90,90")  // указываем пары точек
    .style("fill", "none")  // без заливки
    .style("stroke-width", 5)  // задаем ширину линии
    .style("stroke", "coral");  // указываем цвет линии

// рисуем многоугольник без заливки

var svg_polygon = body.append('svg')  // создаем svg-холст
    .attr("width", 100)  // с заданной шириной
    .attr("height", 100)  // и высотой
    .style("background-color", "beige");  // устанавливаем цвет заливки холста

svg_polygon.append("polygon")
    .attr("points", "50,10 10,90 90,90")  // указываем пары точек
    .style("stroke", "coral")  // указываем цвет линии
    .style("stroke-width", "5px")  // задаем ширину линии
    .style("fill", "none");  // раскрашиваем


// совмещаем фигуры

var svg_multi = body.append('svg')  // создаем svg-холст
    .attr("width", 100)  // с заданной шириной
    .attr("height", 100)  // и высотой
    .style("background-color", "beige");  // устанавливаем цвет заливки холста

svg_multi.append("circle")
    .attr("cx", 50)  // координата центра по оси x, относительно svg-холста
    .attr("cy", 50)  // координата центра по оси y, относительно svg-холста
    .attr("r", 35)  // радиус круга
    .style("stroke", "white")  // раскрашиваем круг
    .style("stroke-width", 5)  // задаем ширину линии
    .style("fill", "none");  // убираем заливку

svg_multi.append("polygon")
    .attr("points", "50,25  71.6,37.5  71.6,62.5 50,75  28.4,62.52  28.4,37.5")
    .attr("rx", 10)
    .attr("ry", 10)
    .style("stroke", "coral")
    .style("stroke-width", "5px")
    .style("fill", "none");  // раскрашиваем

svg_multi.append("line")
    .attr("x1", 10)
    .attr("y1", 90)
    .attr("x2", 90)
    .attr("y2", 90)
    .style("stroke-width", 5)
    .style("stroke", "gray");  // раскрашиваем

svg_multi.append("line")
    .attr("x1", 10)
    .attr("y1", 10)
    .attr("x2", 90)
    .attr("y2", 10)
    .style("stroke-width", 5)
    .style("stroke", "gray");  // раскрашиваем

