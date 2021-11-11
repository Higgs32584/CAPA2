document.addEventListener('DOMContentLoaded', function() {

var part_1 = document.createElement('div');
var part_2 = document.createElement('select');
var part_3 = document.createElement('p');
part_3.style = "position:relative; left:400px; top:50px";
part_1.appendChild(part_2);

part_1.id="part_1";
part_2.id="part_2";
part_3.id="part_3";
part_3.innerText="Descriptions of Animals You Select Will appear here!!";
description_array=["Has a very Long Neck!!","The Best animal out there ;)","Has a lot stripes!","Has a very Long snout,also very big!!","Steals your acorns!", "Crows a lot!!","likes fish,also complains a lot","looks in headlights a lot!","Evil Henchmen in Lion King","Likes Honey!"]

let newOption = new Option('Giraffe',value = description_array[0]);
  part_2.add(newOption,undefined)

  let newOption2 = new Option('Greyhound',value = description_array[1]);
  part_2.add(newOption2,undefined)

  let newOption3 = new Option('Zebra',value = description_array[2]);
  part_2.add(newOption3,undefined)

  let newOption4 = new Option('Elephant',value = description_array[3]);
  part_2.add(newOption4,undefined)

  let newOption5 = new Option('Squirrel',value = description_array[4]);
  part_2.add(newOption5,undefined)

  let newOption6 = new Option('Bird',value = description_array[5]); 
  part_2.add(newOption6,undefined)

  let newOption7 = new Option('Cat',value=description_array[6]);
  part_2.add(newOption7,undefined)

  let newOption8 = new Option('Deer',value=description_array[7]);
  part_2.add(newOption8,undefined)

  let newOption9 = new Option('Hyena',value=description_array[8]);
  
  part_2.add(newOption9,undefined) 
  let newOption10 = new Option('Bear',value=description_array[9]);
  part_2.add(newOption10,undefined)

  document.body.appendChild(part_1);
  document.body.appendChild(part_3);
}, false);

document.addEventListener("change", function() {

  let x = document.getElementById("part_2").selectedIndex

  y= document.getElementById("part_2")[x].value

  document.getElementById("part_3").innerText = y;
});

//function state_change() {
  // var x = document.getElementById("part_2").value;
  // var y= document.createElement('div');
  // y.innerHTML="works";
  // document.body.appendChild(y);
  // document.getElementById("part_3").innerHTML = "You selected: " + x;
  //alert("I heard you!!")
//}