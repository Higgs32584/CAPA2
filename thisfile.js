document.addEventListener('DOMContentLoaded', function() {
    var part_1 = document.createElement('div');
    var part_2 = document.createElement('select');
    
    let newOption = new Option('Giraffe','other');
    part_2.add(newOption,undefined)

    let newOption2 = new Option('Greyhound','other');
    part_2.add(newOption2,undefined)

    let newOption3 = new Option('Zebra','other');
    part_2.add(newOption3,undefined)

    let newOption4 = new Option('Elephant','other');
    part_2.add(newOption4,undefined)

    let newOption5 = new Option('Squirrel','other');
    part_2.add(newOption5,undefined)

    let newOption6 = new Option('Bird','other');
    part_2.add(newOption6,undefined)

    let newOption7 = new Option('Cat','other');
    part_2.add(newOption7,undefined)

    let newOption8 = new Option('Deer','other');
    part_2.add(newOption8,undefined)

    let newOption9 = new Option('Hyena','other');
    part_2.add(newOption9,undefined)

    let newOption10 = new Option('Bear','other');
    part_2.add(newOption10,undefined)

    part_1.add(part_2)
    document.body.appendChild(part_1);
}, false);



/**<h>Would you like to see count values per hour or minute?</h><br>
<Select id="Selector">
   <option value="hr">Hour</option>
   <option value="min">Minute</option>
</Select>
<script>
  document.getElementById("Selector").onchange = changeListener;
  
  function changeListener(){
  var value = this.value
    console.log(value);
    
    if (value == "min"){
      document.body.style.background = "red";
    }else if (value == "hr"){
      document.body.style.background = "blue";
    }
    
  }**/
