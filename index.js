// const container = document.querySelector(".container");
// const toggle = document.querySelector(".toggle");

// toggle.addEventListener("click", () => {

// })

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})