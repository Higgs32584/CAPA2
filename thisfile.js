document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    var doc = document.createElement('select');
    doc.id="animals";
    div.id="wrap";
    doc.ATTRIBUTE_NODE = div;
    document.body.appendChild(div).appendChild(doc);
    doc.innerHTML=doc.id;
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
