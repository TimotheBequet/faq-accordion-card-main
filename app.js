const app = {
    init: function () {
        const liElements = document.querySelectorAll('li');
        liElements.forEach((elem) => {
            elem.addEventListener('click', app.handleClickQuestion);
        });
    },

    handleClickQuestion: function (evt) {
        evt.currentTarget.querySelector('.question_arrow').classList.toggle('arrow_opened');
        evt.currentTarget.querySelector('.question_text').classList.toggle('question_text_active');
        const responseElement = evt.currentTarget.querySelector('.response');
        responseElement.classList.toggle('response_opened');
        if (responseElement.style.maxHeight) {
            responseElement.style.maxHeight = null;
        } else {
            responseElement.style.maxHeight = responseElement.scrollHeight + "px";
        }

        document.querySelectorAll('li').forEach((elem) => {
            if (elem !== evt.currentTarget) {
                const text = elem.querySelector('.question_text_active');
                if (text) {
                    text.classList.remove('question_text_active');
                }
                const arrow = elem.querySelector('.arrow_opened');
                if (arrow) {
                    arrow.classList.remove('arrow_opened');
                }
                const response = elem.querySelector('.response_opened');
                if (response) {
                    response.classList.remove('response_opened');
                }
            }
        });
    },
}

document.addEventListener('DOMContentLoaded', app.init);