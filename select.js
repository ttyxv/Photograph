const button = document.querySelector('#button');
const select = document.querySelector('#dropdown');
const options = document.querySelectorAll('.option');
const selectLabel = document.querySelector('#select-label');

button.addEventListener('click' ,function(e){
  e.preventDefault();
  toggleHiden();
})

function toggleHiden() {
  select.classList.toggle('hidden');
}

options.forEach(function(option){
  option.addEventListener('click', function(e){
    setSelectTitel(e);
  })
})

function setSelectTitel(e) {
  const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
  selectLabel.innerText = labelElement;
  toggleHiden();
}