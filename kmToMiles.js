/* Params */
km:Number

/* Return */
miles:Number


function kmToMile () {
    var miles = document.getElementById('km').value;
    var typeOfConvert = document.getElementById('mileSelect').value;
    console.log(typeOfConvert);
    var result = convert(miles, typeOfConvert)
    document.getElementById('mile').innerHTML = ("Your result = .. " + result);   
}

document.getElementById('milebtn').onclick = function(){kmToMile()};

  /**miles:Number
var miles = parseFloat(prompt("Please enter a number to compare it between Mile and Kilometer:"));
var kilometers = miles * 1.609;
function kmTomile (x) {
    var result = x *1.609;
    return result;
}
console.log(kmTomile(miles));
*/



function convert(distance, typeOfConvert) {
    var result
    if(typeOfConvert == 'km2mile'){
        result = distance *1.609
    }else if(typeOfConvert == 'mile2km'){
        result = distance * 0.621
    }
    return result;
  }

/*
  console.log(miles+'miles ='+convert(miles, 'km2mile')+'km');
<<<<<<< HEAD
  console.log(miles+'km ='+convert(miles, 'mile2km')+' miles');*/
  
  /*maxim tashih kard*/
  function convert(distance, typeOfConvert) {
      var result
    if(typeOfConvert == 'km2mile'){
         result = distance *1.609;
    }else if(typeOfConvert == 'mile2km'){
         result = distance * 0.621;
    }
    return result;
  }
  console.log(miles+'miles ='+convert(miles, 'km2mile')+'km');
  console.log(miles+'km ='+convert(miles, 'mile2km')+' miles');
=======
  console.log(miles+'km ='+convert(miles, 'mile2km')+' miles');
  */
>>>>>>> 13d56a7ea2f406fca077dc5dc866b0ac20a5c920
