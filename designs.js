//global variables -> color, sizepicker, table, and reset button
let defaultColor = document.getElementById('colorPicker');
let submitGrid = document.getElementById('sizePicker');
let reset = document.getElementById('reset');
const table = document.getElementById("pixelCanvas");

//function that creates the grid to be colored
function makeGrid(height, width){
   table.innerHTML = "";
   for (let x = 0; x < height; x++){
     let row = document.createElement('tr');
     for (let y = 0; y < width; y++){
       let column = document.createElement('td');
       row.appendChild(column);
     }
     table.appendChild(row);
   }
}

//function that clears the grid and sets color to black
function resetGrid(){
  // default measures to make an 'empty' grid
  let height = 0;
  let width = 0;
  makeGrid(height, width);
  defaultColor.value = "#000";
}

//listens to the reset button and calls resetGrid function
reset.addEventListener("click", function (event) {
  event.preventDefault();
  resetGrid();
});

//listens to sizePicker's child 'submit' to make the Grid
submitGrid.addEventListener('submit', function (event) {
      event.preventDefault();
      let height = document.getElementById('inputHeight').value;
      let width = document.getElementById('inputWidth').value;
      makeGrid(height, width);
});

//listens to the table cells to color them
table.addEventListener("click", function (event){
  //only be able to color cells
  if (event.target.nodeName === 'TD'){
    //change backroundcolor when a cell is clicked
    event.target.style.backgroundColor = defaultColor.value;
  }
});
