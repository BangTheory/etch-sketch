let x = +prompt("enter canvas size");
//let x = 16;
const frame = document.querySelector('#main');

function creation(num){
    for (let i = 0; i < num * num; i++){
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        frame.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        frame.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        frame.appendChild(div).setAttribute("id", `${i}`);
    }
}

creation(x); 
  
for (i = 0; i < x * x; i++){
    let obj = document.getElementById(`${i}`)
    obj.addEventListener('mouseover', (e) => {
        console.log(e.target.id);
        objSelected = document.getElementById(`${e.target.id}`);
        objSelected.style.backgroundColor = 'black';
    });
}

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    for (i = 0; i < x * x; i++){
        let obj = document.getElementById(`${i}`);
        obj.style.backgroundColor = 'white';
    }
});