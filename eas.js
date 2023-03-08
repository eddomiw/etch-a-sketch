const body = document.querySelector('.body');

let numberOfBoxes = prompt("How many boxes per row?", 16)

let emptyArray = [];

// Create new div boxes classed as rows 
for (i=0;i<numberOfBoxes;i++){
  emptyArray[i] = document.createElement('div');
  emptyArray[i].classList.add('row');
  body.appendChild(emptyArray[i]);
}


// Create empty arrays for create box and color function
let boxes = [];
for (i=0;i<numberOfBoxes;i++) {
  boxes[i]=[];
};


boxes.forEach((box) => {
  for (i=0;i<numberOfBoxes;i++) {
    createBoxAndColorChange(box);
  };
});




function createBoxAndColorChange(rowName) {
  rowName[i]= document.createElement('div');
  rowName[i].classList.add('value')
  rowName[i].textContent= 'hi';
  rowName[i].addEventListener('mouseover', (e) => {
    e.target.style.background = 'pink';
  })
  emptyArray[i].appendChild(rowName[i]);
}