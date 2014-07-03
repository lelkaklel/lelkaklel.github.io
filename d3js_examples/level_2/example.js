var t = d3.select("body")  // выбираем "тело" документа
            .append("table");  // добавляем к нему таблицу

var h = t.append("thead");  // добавляем шапку таблицы
var b = t.append("tbody");  // добавляем тело таблицы

var tr = h.append("tr");  // добавляем строку к шапке

tr.append("th")  // добавляем ячейку к строке шапки
    .text("Товар");  // и устанавливаем для нее текст

tr.append("th")
    .text("Цена");

tr = b.append("tr");

tr.append("td")
    .text("Хлеб");

tr.append("td")
    .text("20");

tr = b.append("tr");

tr.append("td")
    .text("Молоко");

tr.append("td")
    .text("45");