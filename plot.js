function CSVread() {
    
StockDATA = []

d3.csv("GME.csv").then(function (GME) {
    console.log(GME)
});

d3.csv("AMC.csv").then(function (AMC) {
    console.log(AMC)
});

d3.csv("AMZN.csv").then(function(AMZN) {
    console.log(AMZN)
});

d3.csv("DIS.csv").then(function(DIS) {
    console.log(DIS)
});

d3.csv("DOGE.csv").then(function(DOGE) {
    console.log(DOGE)
});

d3.csv("VTSAX.csv").then(function(VTSAX) {
    console.log(VTSAX)
});
};

CSVread()