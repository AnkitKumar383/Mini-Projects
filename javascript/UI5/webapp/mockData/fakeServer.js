sap.ui.define([], function() {
    "use strict";
    var result= {
        colors: [
          {
            color: "Black",
            category: "hue",
            type: "primary",
            rgba: [255,255,255,1],
            hex: "#000",
            frequency: null
          },
          {
            color: "White",
            category: "value",
            type: "secondary",
            rgba: [0,0,0,1],
            hex: "#FFF",
            frequency: null
          },
          {
            color: "Red",
            category: "hue",
            type: "primary",
            rgba: [255,0,0,1],
            hex: "#FF0",
            frequency: 400
          },
          {
            color: "Blue",
            category: "hue",
            type: "primary",
            rgba: [0,0,255,1],
            hex: "#00F",
            frequency: 620
          },
          {
            color: "Yellow",
            category: "hue",
            type: "primary",
            rgba: [255,255,0,1],
            hex: "#FF0",
            frequency: 510
          },
          {
            color: "Green",
            category: "hue",
            type: "secondary",
            rgba: [0,255,0,1],
            hex: "#0F0",
            frequency: 550
          },
        ]
    };

    var getColors = function() {
        return new Promise((resolve,reject)=>{
          if(result){
            resolve(result);
          } else {
            reject("No data found!");
          }
        })
    };
    var getColorByName = function(aColor){
        var colorDetails;
        result.colors.find((el)=>{
            if(el.color === aColor){
                colorDetails=el;
            }
        })
        return new Promise((resolve, reject)=>{
          if(colorDetails){
            resolve(colorDetails);
          } else {
            reject("No Data found for " +  aColor + " color.");
          }
        })
    }

    return {
        getColors: getColors,
        getColorByName: getColorByName
    };
});
