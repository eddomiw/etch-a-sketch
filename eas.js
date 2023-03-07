const row = document.querySelector('.row');
const column = document.querySelector('.column');

let boxes= [];

for (i=0;i<16;i++){
  boxes[i]= document.createElement('div');
  boxes[i].classList.add('value')
  boxes[i].textContent= 'hi';
  boxes[i].addEventListener('mouseover', (e) => {
    e.target.style.background = 'pink';
  })
  row.appendChild(boxes[i]);
}

