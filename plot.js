function CSVread() {

    d3.csv("GME.csv").then(function (GME) {
        console.log("GME")
        console.log(GME)
    });

    d3.csv("AMC.csv").then(function (AMC) {
        console.log("AMC")
        console.log(AMC)
    });

    d3.csv("AMZN.csv").then(function (AMZN) {
        console.log("AMZN")
        console.log(AMZN)
    });

    d3.csv("DIS.csv").then(function (DIS) {
        console.log("DIS")
        console.log(DIS)
    });

    d3.csv("DOGE.csv").then(function (DOGE) {
        console.log("DOGE")
        console.log(DOGE)
    });

    d3.csv("VTSAX.csv").then(function (VTSAX) {
        console.log("VTSAX")
        console.log(VTSAX)
    });
};

CSVread();

// -------------------------------------------------------------------
// Use d3 to select the dropdown menu
var dropdown = d3.select('#selDataset');

// Append a new ticker symbol to the dropdown menu
dropdown.append('option').text('AMC');
dropdown.append('option').text('AMZN');
dropdown.append('option').text('DIS');
dropdown.append('option').text('DOGE');
dropdown.append('option').text('GME');
dropdown.append('option').text('VTSAX');

// A function for when 'AMC' ticker is selected
function chooseAMC() {
    d3.csv('AMC.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        ul.append("li").text(`Stock Ticker: AMC`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
};

// A function for when 'AMZN' ticker is selected
function chooseAMZN() {
    d3.csv('AMZN.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        ul.append("li").text(`Stock Ticker: AMZN`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
};

// A function for when 'DIS' ticker is selected
function chooseDIS() {
    d3.csv('DIS.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        ul.append("li").text(`Stock Ticker: DIS`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
};

// A function for when 'DOGE' ticker is selected
function chooseDOGE() {
    d3.csv('DOGE.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        ul.append("li").text(`Stock Ticker: DOGE`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[129].Closing_price}`);
        ul.append("li").text(`Pct Change: ${((data[129].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
};

// A function for when 'GME' ticker is selected
function chooseGME() {
    d3.csv('GME.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        ul.append("li").text(`Stock Ticker: GME`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
};

// A function for when 'VTSAX' ticker is selected
function chooseVTSAX() {
    d3.csv('VTSAX.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        ul.append("li").text(`Stock Ticker: VTSAX`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[95].Closing_price}`);
        ul.append("li").text(`Pct Change: ${((data[95].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
};

chooseAMZN();
// -------------------------------------------------------------------