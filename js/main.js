'use strict';
const inputValue = document.querySelector('#input-comment');
const buttonEl = document.querySelector('#add-comment');
const commentsList = document.querySelector('#comments-list');


document.querySelector('#input-comment')
    .addEventListener('keydown', function (event) {
        var key = event.which || event.keyCode;
        if (key === 13 && event.ctrlKey) {
            buttonEl.onclick();
        }
    });

buttonEl.onclick = function () {
    if (!inputValue.value) {
        return null;
    }
    var listItem = inputValue.value;
    var listItemEl = document.createElement('li');
    listItemEl.innerText = listItem;
    commentsList.appendChild(listItemEl);
    inputValue.value = '';
    inputValue.focus();

};

