//function expression to select elements

const selectElement = (s) => document.querySelector(s);

//open the menu on click
document.querySelector('.open').addEventListener('click', ()=>{
    document.querySelector('.nav-list').classList.add('active');
})

document.querySelector('.close').addEventListener('click', ()=>{
    document.querySelector('.nav-list').classList.remove('active');
})