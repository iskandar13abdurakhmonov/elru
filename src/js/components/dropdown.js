document.addEventListener('DOMContentLoaded', () => {

    const dropdownBtn = document.querySelector('.dropdown__btn');
    const dropdownContent = document.querySelector('.dropdown__content');

    function btnIgnore(e) {
        if(e == dropdownContent) {
            dropdownBtn.classList.remove('dropdown__btn--active');
            dropdownContent.classList.remove('dropdown__content--active');
        }
    };

    dropdownBtn.addEventListener('click', (e) => {
        dropdownBtn.classList.toggle('dropdown__btn--active');
        dropdownContent.classList.toggle('dropdown__content--active');
        btnIgnore;
       
    });

   
});






