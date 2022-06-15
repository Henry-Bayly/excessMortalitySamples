const url = "https://raw.githubusercontent.com/Vital-Stats-Integrity-Proj/monthly_county_level_excess_mortality/main/data/output/exMortEstimates.csv"
d3.csv(url, function(data) {
    console.log(data);
console.log(data.state)
});