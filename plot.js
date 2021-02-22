// function CSVread() {

//     d3.csv("GME.csv").then(function (GME) {
//         console.log("GME")
//         console.log(GME)
//     });

//     d3.csv("AMC.csv").then(function (AMC) {
//         console.log("AMC")
//         console.log(AMC)
//     });

//     d3.csv("AMZN.csv").then(function (AMZN) {
//         console.log("AMZN")
//         console.log(AMZN)
//     });

//     d3.csv("DIS.csv").then(function (DIS) {
//         console.log("DIS")
//         console.log(DIS)
//     });

//     d3.csv("DOGE.csv").then(function (DOGE) {
//         console.log("DOGE")
//         console.log(DOGE)
//     });

//     d3.csv("VTSAX.csv").then(function (VTSAX) {
//         console.log("VTSAX")
//         console.log(VTSAX)
//     });
// };

// CSVread();

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
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
    // Open csv
    Plotly.d3.csv('AMC.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys 
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace 
        var trace1 = {
            x: unpack(rows, 'Date'),
            close: unpack(rows, 'Closing_price'),
            high: unpack(rows, 'High_price'),
            low: unpack(rows, 'Low_price'),
            open: unpack(rows, 'Opening_price'),

            // cutomise colors
            increasing: { line: { color: 'black' } },
            decreasing: { line: { color: 'red' } },

            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };
        // set data variable 
        var data = [trace1];
        // build layout 
        var layout = {
            autosize: false,
            width: 500,
            height: 500,
            margin: {
                l: 50,
                r: 50,
                b: 100,
                t: 100,
                pad: 4
            },
            yaxis: {
                autorange: true, 
              },
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
                rangeslider: {
                    visible: false
                }
            }
        };
        // plot chart 
        Plotly.newPlot('bar', data, layout);
    });
};
chooseAMC();

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
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
    // Open csv
    Plotly.d3.csv('AMZN.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys 
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace2 = {
            x: unpack(rows, 'Date'),
            close: unpack(rows, 'AMZN.Closing_price'),
            high: unpack(rows, 'AMZN.High_price'),
            low: unpack(rows, 'AMZN.Low_price'),
            open: unpack(rows, 'AMZN.Opening_price'),

            // cutomise colors
            increasing: { line: { color: 'black' } },
            decreasing: { line: { color: 'red' } },

            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };
        // set data variable
        var data = [trace2];
        // build layout
        var layout = {
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
                rangeslider: {
                    visible: false
                }
            }
        };
        // plot chart 
        Plotly.newPlot('bar', data, layout);
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
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
    // Open csv
    Plotly.d3.csv('DIS.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace3 = {
            x: unpack(rows, 'Date'),
            close: unpack(rows, 'DIS.Closing_price'),
            high: unpack(rows, 'DIS.High_price'),
            low: unpack(rows, 'DIS.Low_price'),
            open: unpack(rows, 'DIS.Opening_price'),

            // cutomise colors
            increasing: { line: { color: 'black' } },
            decreasing: { line: { color: 'red' } },

            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };
        // set data variable
        var data = [trace3];
        // build layout
        var layout = {
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
                rangeslider: {
                    visible: false
                }
            }
        };
        // plot chart
        Plotly.newPlot('bar', data, layout);
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
        ul.append("li").text(`Pct Change: ${(((data[129].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
    // Open csv
    Plotly.d3.csv('DOGE.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace4 = {
            x: unpack(rows, 'Date'),
            close: unpack(rows, 'DOGE.Closing_price'),
            high: unpack(rows, 'DOGE.High_price'),
            low: unpack(rows, 'DOGE.Low_price'),
            open: unpack(rows, 'DOGE.Opening_price'),

            // cutomise colors
            increasing: { line: { color: 'black' } },
            decreasing: { line: { color: 'red' } },

            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };
        // set data variable
        var data = [trace4];
        // build layout
        var layout = {
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
                rangeslider: {
                    visible: false
                }
            }
        };
        // plot chart
        Plotly.newPlot('bar', data, layout);
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
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
    // Open csv
    Plotly.d3.csv('GME.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace5 = {
            x: unpack(rows, 'Date'),
            close: unpack(rows, 'GME.Closing_price'),
            high: unpack(rows, 'GME.High_price'),
            low: unpack(rows, 'GME.Low_price'),
            open: unpack(rows, 'GME.Opening_price'),

            // cutomise colors
            increasing: { line: { color: 'black' } },
            decreasing: { line: { color: 'red' } },

            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };
        // set data variable
        var data = [trace5];
        // build layout
        var layout = {
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
                rangeslider: {
                    visible: false
                }
            }
        };
        // plot chart
        Plotly.newPlot('bar', data, layout);
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
        ul.append("li").text(`Pct Change: ${(((data[95].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${data.High_price.max()}`);
        ul.append("li").text(`Low Price: ${data.Low_price.min()}`)
        });
    // Open csv
    Plotly.d3.csv('VTSAX.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace6 = {
            x: unpack(rows, 'Date'),
            close: unpack(rows, 'VTSAX.Closing_price'),
            high: unpack(rows, 'VTSAX.High_price'),
            low: unpack(rows, 'VTSAX.Low_price'),
            open: unpack(rows, 'VTSAX.Opening_price'),

            // cutomise colors
            increasing: { line: { color: 'black' } },
            decreasing: { line: { color: 'red' } },

            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };
        // set data variable
        var data = [trace6];
        // build layout
        var layout = {
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
                rangeslider: {
                    visible: false
                }
            }
        };
        // plot chart
        Plotly.newPlot('bar', data, layout);
    });
};

// A function that will return the correct chooseSTOCK function when the dropdown is selected
function chooseStock (select) {

    if (select === 'AMZN') {
        return chooseAMZN();
    }
    else if (select === 'DIS') {
        return chooseDIS();
    }
    else if (select === 'DOGE') {
        return chooseDOGE();
    }
    else if (dropdown === 'GME') {
        chooseGME();
    }
    else if (dropdown === 'VTSAX') {
        return chooseVTSAX();
    }
    else {
        return chooseAMC();
    }
};
chooseStock();