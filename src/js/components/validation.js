document.addEventListener('DOMContentLoaded', () => {
    const tab = document.querySelector('.validation__container');
    const validationBtn = document.querySelectorAll('.toggle-validation__button')
    const validationContent = document.querySelectorAll('.validation__content');

    if (tab) {
        tab.addEventListener('click', (e) => {
          if (e.target.classList.contains('toggle-validation__button')) {
            const tabsPath = e.target.dataset.tabsPath;
            tabsHandler(tabsPath);
          }
        });
      }

    const tabsHandler = (path) => {
        validationBtn.forEach(el => {el.classList.remove('toggle-validation__button--active')});
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('toggle-validation__button--active');

        validationContent.forEach(el => {el.classList.remove('validation__content--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('validation__content--active');
    };
});
