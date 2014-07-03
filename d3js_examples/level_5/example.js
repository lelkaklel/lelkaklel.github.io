
function visualize(data) {

    // создаем график

    var body = d3.select("body").append("div");

    var divs = body  // выбираем селектор body
        .selectAll("div")  // просто так нужно =)
        .data(data)  // привязываем данные
        .enter()  // входим в цикл по данным
        .append("div")  // создаем элемент div для каждого элемента данных
        .attr("class", "div_bar")
        .style("width", function(d){ return d.boobs_size*100 + 'px';});  // меняем его ширину пропорционально текущему значению данных

    // добавим названия столбцов

    divs.append("div")
        .attr("class", "div_index")
        .text( function(d,i){ return d.name; } );  // функции для элементов, к которым привязаны данные принимают 2 значения,
                                              // d - элемент массива данных и i - порядковый элемент элемента данных
                                              // в массиве

    // добавим надписи со значениями

    divs.append("div")
        .attr("class", "div_value")
        .text( function(d){ return d.boobs_size; } );

}

d3.json("data.json",
    function (error, data) {
        if (error) return console.warn(error);
        visualize(data);
    });

// строим график из простых div-ов на основе данных

