
// массив данных в формате JSON

json_data = [
    {"width": 10},
    {"width": 40},
    {"width": 100},
    {"width": 190},
    {"width": 170},
    {"width": 110},
    {"width": 80},
    {"width": 30},
    {"width": 20},
]

// строим график из простых div-ов на основе данных

d3.select("body")  // выбираем селектор body
    .data(json_data)  // привязываем данные
    .enter()  // входим в цикл по данным
        .append("div")  // создаем элемент div для каждого элемента данных
        .attr("class", "chart_div")
        .style("width", function(d){ return d.width*3 + 'px';})  // меняем его ширину пропорционально текущему значению данных
        .text(function(d){ return d.width;});  // то же самое с текстом