function addMenuFunctionality() {
    const menuIcon = document.querySelectorAll('.mb-header nav .menu');
    const menuList = document.querySelectorAll('.mb-header .bottom__header');

    menuIcon.forEach(icon => {
        icon.addEventListener('click', () => {
            menuList.forEach(list => {
                list.classList.toggle("show");
            });
        });
    });
}

// Call the function to add menu functionality
addMenuFunctionality();



function addDropdownFunctionality() {
    const questions = document.querySelectorAll('.question');
    let activeAccordion = null;

    questions.forEach(question => {
        const icon = question.querySelector('.icon'); 
        const answer = question.parentElement.nextElementSibling;

        question.addEventListener("click", () => {
            if (activeAccordion && activeAccordion !== question) {
                activeAccordion.querySelector('.icon').classList.remove('active'); 
                activeAccordion.parentElement.nextElementSibling.style.maxHeight = null; 
            }

            if (icon.classList.contains('active')) {
                icon.classList.remove('active'); 
                answer.style.maxHeight = null; 
            } else {
                icon.classList.add('active'); 
                answer.style.maxHeight = answer.scrollHeight + "px"; 
                activeAccordion = question;
            }
        });
    });
}

addDropdownFunctionality();
