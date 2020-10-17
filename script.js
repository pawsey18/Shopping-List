var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

createList();
refresh();

function refresh(){ 
    for (var i = 0; i < list.length; i++){ 
        list[i].addEventListener("click", toggleItem);
    }
    
}

function toggleItem(){ 
    this.classList.toggle("done");
}

function inputLength() {
    return input.value.length;
}

// Creating the list item along with the button
function createListElement() {

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    // Adds a button to the LI item that was entered from text field.
    var button = document.createElement('button');
    button.appendChild(document.createTextNode('delete'));

    li.appendChild(button);
  
    input.value = "";
    refresh();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",function(e) {
    var tgt = e.target;
    if (tgt.tagName.toUpperCase() == "BUTTON") {
      //console.log(e.target.parentNode);
      tgt.parentNode.parentNode.removeChild(tgt.parentNode);
      tgt.parentNode.removeChild(tgt); 
      }
  });

  // This creates the buttons for the populated data
function createButtons(){ 
var li = document.querySelectorAll('li');

li.forEach(function(i) {
  var button = document.createElement('button');
  button.appendChild(document.createTextNode('delete'));
  i.appendChild(button);
});
}
// Populate data & buttons for each LI item.
function createList(){ 
    var items = [
        'Apples',
        'Grapes',
        'Oranges',
        'Bananas',
        'Blueberries',
        'Strawberries',
        'Kiwi'
    ],
    li = document.createElement("li");
    items.forEach(function(item)  {
        li = document.createElement('li');
        li.setAttribute("id","item"); // not using
        ul.appendChild(li);
        li.innerHTML += item;
    });
    createButtons();
}





