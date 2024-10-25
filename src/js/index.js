document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq__list-item');
    const answers = document.querySelectorAll('[data-answer]');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const target = this.getAttribute('data-question');

            questions.forEach(q => {
                if (q === this) {
                    q.classList.add('active');
                } else {
                    q.classList.remove('active');
                }
            });

            answers.forEach(answer => {
                if (answer.getAttribute('data-answer') === target) {
                    answer.classList.add('active');
                } else {
                    answer.classList.remove('active');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const burgerBtn = document.querySelector('.header__burger-btn');
    const navItems = document.querySelectorAll('.burger__nav-item');

    burgerBtn.addEventListener('click', function() {
        if (burger.classList.contains('open')) {
            burger.classList.remove('open');
            document.body.style.overflow = ''; 
            navItems.forEach(item => {
                item.style.animation = 'none';
            });
        } else {
            burger.classList.add('open');
            document.body.style.overflow = 'hidden'; 
            navItems.forEach((item, index) => {
                item.style.animation = `slideIn 0.15s forwards ${index * 0.05}s`;
            });
        }
    });

    burger.addEventListener('click', function(event) {
        if (burger.classList.contains('open')) {
            burger.classList.remove('open');
            document.body.style.overflow = '';
            navItems.forEach(item => {
                item.style.animation = 'none';
            });
        }
    });
});