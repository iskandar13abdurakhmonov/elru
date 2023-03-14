switchTab = (id) => {
    const steps = document.querySelectorAll('.stepper-content');
    const stages = document.querySelectorAll('.stage');

    steps.forEach((step) => {
        step.classList.remove('active');
    });

    const target = document.getElementById(id);
    const target_step = document.querySelector(`[data-target="${id}"]`);

    target.classList.add('active');
    target_step.classList.add('active');
}
