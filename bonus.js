function heatplots(id) {

    d3.json('samples.json').then(function(heatdata) {
    console.log(heatdata);

    var heatdataselect = heatdata.metadata.filter(datacpy => datacpy.id.toString() === id)[0];
    //console.log(heatdataselect); 

    var filtermeta = heatdataselect.wfreq;
    console.log(filtermeta); 


    var hgraph = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            title: { text: "Belly Button Washing Frequency"},
            type: "indicator",
            mode: "gauge+number+delta",
            delta: { reference: 2 }, 
            gauge: {
                axis: {
                  range: [0, 10],
                 
                  },

            steps: [
                    { range: [0, 2], color: "#f0fff0" },
                    { range: [2, 4], color: "#d0f0c0" },
                    { range: [4, 6], color: "#addfad" },
                    { range: [6, 8], color: "#87a96b" },
                    { range: [8, 10], color: "#587246" }
                  ],
            
            threshold: {
                    line: { color: "red", width: 10 },
                    thickness: 1,
                    value: filtermeta
                     },
                 },

             },
    

    ];

    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', hgraph, layout);

  });

}



