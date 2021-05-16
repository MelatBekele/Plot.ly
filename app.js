// function unpack(rows, index){
//   return rows.map(function(row){
//     return row[index];
//   });

// }

function getplots(id) {

  d3.json('samples.json').then(function(data) {
    console.log(data);

    var sampleValues = data.samples[0].sample_values;
    var otu_ids = data.samples[0].otu_ids;
    var otuLables = data.samples[0].otu_labels;
    //var sampleValuess = unpack(data.samples.sample_values,3);
      console.log(otuLables);
     
    var data = [{
        type: 'bar',
        x: sampleValues,
        y: otu_ids,
        orientation: 'h'
      }];
      
      Plotly.newPlot('bar', data);
  });


}

getplots();