// function unpack(rows, index){
//   return rows.map(function(row){
//     return row[index];
//   });

// }

function getplots(id) {

  d3.json('samples.json').then(function(data) {
    
   // console.log(data);
   //selecting the values
    var sampleValues = data.samples[0].sample_values;
    var sampleValuesVer = data.samples[0].sample_values.slice(0,10);
    //console.log(sampleValuesVer);
    var otuIdss = data.samples[0].otu_ids;
    //console.log(otuIdss);
    var otuLables = data.samples[0].otu_labels;
    //var sampleValuess = unpack(data.samples.sample_values,3);
      
    //Top 10 
    var topTen = data.samples[0].sample_values.slice(0,10).sort((a,b) =>a-b);
    var otuTenIds = data.samples[0].otu_ids.slice(0,10).reverse();
    var topTenLa = data.samples[0].otu_labels.slice(0,10);

    //formating ticker and label 
    var topTenMap = otuTenIds.map(d => "OTU " + d);
    //console.log(topTenMap);

    
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
      var data0 = [Hgraph];
      Plotly.newPlot('bar', data0, layout);
  

    var Cgraph =
    {
      x: otuIdss,
      y: sampleValues,
      mode: "markers",
      marker: {
        size: sampleValues,
        color: otuIdss
      },
      text: otuLables

    };
    

    var layout1 = {
      xaxis : { title: "Samples" },
     
      height: 600,
      width: 1200

    };

    var data1 = [Cgraph];
    Plotly.newPlot('bubble', data1, layout1);

  });
}

getplots();


//Display the sample metadata, i.e., an individual's demographic information.
function smpMetadata (id) {
  
  d3.json('samples.json').then(function(medata) {
    console.log(medata);
    
    //var metaValues = medata.metadata;
    //console.log(metaValues);

    var filtermeta = medata.metadata.filter(datacpy => datacpy.id.toString() === id)[0];
    console.log(filtermeta);

    var demographics = d3.select("#sample-metadata");
    console.log(demographics);

    d3.select("#sample-metadata").node().value = "";
 

    Object.entries(filtermeta).forEach((key) => {   
      demographics.append("selDataset");    
     });
  });
}

//function connection(){
//getplots();
smpMetadata("941");
//}
