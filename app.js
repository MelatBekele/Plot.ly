// function unpack(rows, index){
//   return rows.map(function(row){
//     return row[index];
//   });

// }

function getplots(id) {

  d3.json('samples.json').then(function(data) {
    
    console.log(data);
   //selecting the values
    var sampleValues = data.samples[0].sample_values;
    var otu_ids = data.samples[0].otu_ids;
    var otuLables = data.samples[0].otu_labels;
    //var sampleValuess = unpack(data.samples.sample_values,3);
      
    //Top 10 
    var topTen = data.samples[0].sample_values.slice(0,10).sort((a,b) =>b-a);
    var topTenLa = data.samples[0].otu_labels.slice(0,10);

    //formating havor over and label 
    


    console.log(topTen);
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