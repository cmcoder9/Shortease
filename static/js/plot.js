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
    d3.csv('../static/js/AMC.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        // Convert the csv objects into floats and create array to hold the floats
        var highPrice = [];
        var lowPrice = [];

        for (var i = 0; i < data.length; i++) {
            highPrice.push(parseFloat(data[i].High_price, 10))
        }

        for (var i = 0; i < data.length; i++) {
            lowPrice.push(parseFloat(data[i].Low_price, 10))
        }

        ul.append("li").text(`Stock Ticker: AMC`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${d3.max(highPrice)}`);
        ul.append("li").text(`Low Price: ${d3.min(lowPrice)}`)
    });

    // Open csv
    Plotly.d3.csv('../static/js/AMC.csv', function (err, rows) {
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
    d3.csv('../static/js/AMZN.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        // Convert the csv objects into floats and create array to hold the floats
        var highPrice = [];
        var lowPrice = [];

        for (var i = 0; i < data.length; i++) {
            highPrice.push(parseFloat(data[i].High_price, 10))
        }

        for (var i = 0; i < data.length; i++) {
            lowPrice.push(parseFloat(data[i].Low_price, 10))
        }

        ul.append("li").text(`Stock Ticker: AMZN`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${d3.max(highPrice)}`);
        ul.append("li").text(`Low Price: ${d3.min(lowPrice)}`)
    });
    // Open csv
    Plotly.d3.csv('../static/js/AMZN.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys 
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace2 = {
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
        var data = [trace2];
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
chooseAMZN();

// A function for when 'DIS' ticker is selected
function chooseDIS() {
    d3.csv('../static/js/DIS.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        // Convert the csv objects into floats and create array to hold the floats
        var highPrice = [];
        var lowPrice = [];

        for (var i = 0; i < data.length; i++) {
            highPrice.push(parseFloat(data[i].High_price, 10))
        }

        for (var i = 0; i < data.length; i++) {
            lowPrice.push(parseFloat(data[i].Low_price, 10))
        }

        ul.append("li").text(`Stock Ticker: DIS`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${d3.max(highPrice)}`);
        ul.append("li").text(`Low Price: ${d3.min(lowPrice)}`)
    });
    // Open csv
    Plotly.d3.csv('../static/js/DIS.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace3 = {
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
        var data = [trace3];
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
chooseDIS();

// A function for when 'DOGE' ticker is selected
function chooseDOGE() {
    d3.csv('../static/js/DOGE.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        // Convert the csv objects into floats and create array to hold the floats
        var highPrice = [];
        var lowPrice = [];

        for (var i = 0; i < data.length; i++) {
            highPrice.push(parseFloat(data[i].High_price, 10))
        }

        for (var i = 0; i < data.length; i++) {
            lowPrice.push(parseFloat(data[i].Low_price, 10))
        }

        ul.append("li").text(`Stock Ticker: DOGE`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[129].Closing_price}`);
        ul.append("li").text(`Pct Change: ${(((data[129].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${d3.max(highPrice)}`);
        ul.append("li").text(`Low Price: ${d3.min(lowPrice)}`)
    });
    // Open csv
    Plotly.d3.csv('../static/js/DOGE.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace4 = {
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
        var data = [trace4];
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
chooseDOGE();

// A function for when 'GME' ticker is selected
function chooseGME() {
    d3.csv('../static/js/GME.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        // Convert the csv objects into floats and create array to hold the floats
        var highPrice = [];
        var lowPrice = [];

        for (var i = 0; i < data.length; i++) {
            highPrice.push(parseFloat(data[i].High_price, 10))
        }

        for (var i = 0; i < data.length; i++) {
            lowPrice.push(parseFloat(data[i].Low_price, 10))
        }

        ul.append("li").text(`Stock Ticker: GME`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[96].Closing_price}`);
        ul.append("li").text(`Pct Change: ${(((data[96].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${d3.max(highPrice)}`);
        ul.append("li").text(`Low Price: ${d3.min(lowPrice)}`)
    });
    // Open csv
    Plotly.d3.csv('../static/js/GME.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace5 = {
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
        var data = [trace5];
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
chooseGME();

// A function for when 'VTSAX' ticker is selected
function chooseVTSAX() {
    d3.csv('../static/js/VTSAX.csv').then(function updateTable(data) {

        // Depopulate the stock summary table and create new list tags
        var list = d3.select("#sample-metadata");
        list.html("");
        var ul = list.append("ul");

        // Convert the csv objects into floats and create array to hold the floats
        var highPrice = [];
        var lowPrice = [];

        for (var i = 0; i < data.length; i++) {
            highPrice.push(parseFloat(data[i].High_price, 10))
        }

        for (var i = 0; i < data.length; i++) {
            lowPrice.push(parseFloat(data[i].Low_price, 10))
        }

        ul.append("li").text(`Stock Ticker: VTSAX`);
        ul.append("li").text(`First Day Open: ${data[0].Opening_price}`);
        ul.append("li").text(`Last Day Close: ${data[95].Closing_price}`);
        ul.append("li").text(`Pct Change: ${(((data[95].Closing_price - data[0].Opening_price) / (data[0].Opening_price)) * 100).toFixed(2)}%`);
        ul.append("li").text(`High Price: ${d3.max(highPrice)}`);
        ul.append("li").text(`Low Price: ${d3.min(lowPrice)}`)
    });
    // Open csv
    Plotly.d3.csv('../static/js/VTSAX.csv', function (err, rows) {
        // create unpacking fucntion that unpack the rows and keys
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        // build the trace
        var trace6 = {
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
        var data = [trace6];
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
chooseVTSAX();

// A function that will return the correct chooseSTOCK function when the dropdown is selected
function chooseStock(select) {

    if (select === 'AMZN') {
        return chooseAMZN();
    }
    else if (select === 'DIS') {
        return chooseDIS();
    }
    else if (select === 'DOGE') {
        return chooseDOGE();
    }
    else if (select === 'GME') {
        return chooseGME();
    }
    else if (select === 'VTSAX') {
        return chooseVTSAX();
    }
    else {
        return chooseAMC();
    }
};
chooseStock();