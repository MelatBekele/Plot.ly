// function unpack(rows, index){
//   return rows.map(function(row){
//     return row[index];
//   });

// }

function getplots(id) {

  d3.json('samples.json').then(function(data) {
    
    console.log(data);
   //selecting the values
    var sampleValues = data.samples[0].sample_values.slice(0,10);
    console.log(sampleValues);
    var otuIds = data.samples[0].otu_ids;
    var otuLables = data.samples[0].otu_labels;
    //var sampleValuess = unpack(data.samples.sample_values,3);
      
    //Top 10 
    var topTen = data.samples[0].sample_values.slice(0,10).sort((a,b) =>a-b);
    var otuTenIds = data.samples[0].otu_ids.slice(0,10);
    var topTenLa = data.samples[0].otu_labels.slice(0,10);

    //formating ticker and label 
    var topTenMap = otuTenIds.map(d => "OTU " + d);
    console.log(topTenMap);

    
    var Hgraph = {
        type: 'bar',
        x: topTen,
        y: topTenMap,
        text: topTenLa,
        orientation: 'h'
      };
    
      var layout = {
        title: "Top 10 Samples",
        xaxis: { title: "Samples" },
        yaxis: { title: "ID",
        tickmode:"linear",}

      };
      var data = [Hgraph];
      Plotly.newPlot('bar', data, layout);
  });


}

getplots();