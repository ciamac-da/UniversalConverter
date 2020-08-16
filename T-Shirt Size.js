/** Array ? */
var euSize = ["s", "m", "l", "xl", "xxl"];
  var usSize = [
    ["6", "7", "8"],
    ["10", "11", "12", "13"],
    ["14", "15", "16", "17"],
    ["18", "19", "20", "21"],
    ["22", "23", "24"]
  ];
  
  
  function us2euConvert(size) {
    for (var i = 0; i < usSize.length; i++) {
      console.log(usSize[i]);

      for (var j = 0; j < usSize[i].length; j++) {
        // if (size == usSize[i][j]) {
        //   // console.log(euSize[i]);
        // }
        console.log(usSize[j]);

      }

    }


  }


console.log(us2euConvert);