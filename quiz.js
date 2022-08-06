function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   
}
const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');
const helloBtn = document.querySelector('.hello');
trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});

helloBtn.addEventListener('click', function(){
    closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
});

function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}


