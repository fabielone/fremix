var xValues = ["1; Health & Attendance", "2", "3", "4", "5", "6", "7", "8","9","10"];
var yValues = [[1469 show=value], 6, 7, 5, 4,3,2,3,5,10];
var barColors = ["black", "black","black","black","black"];
new Chart("physicalrc", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      label: "Physical Resource",
      borderColor: "black",
      backgroundColor: "grey",
      data: yValues,
    }]},options:{scales: {x: {
        ticks: {
          callback: function(label) {
            let realLabel = this.getLabelForValue(label)
            var month = realLabel.split(";")[0];
            var year = realLabel.split(";")[1];
            return month;
          }
        }
      },
      xAxis2: {
        type: "category",
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
        ticks: {
          callback: function(label) {
            let realLabel = this.getLabelForValue(label)
            var month = realLabel.split(";")[0];
            var year = realLabel.split(";")[1];
            return year;}}}},y:{min:0}}});