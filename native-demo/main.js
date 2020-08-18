const inputElement = document.getElementById('input');
const buttonElement = document.getElementById('button');

initInputListener();

function onButtonClick() {
    alert('Button clicked');
}

function initInputListener() {
    inputElement.addEventListener('valueChange', ({detail}) => {
        console.log(detail);
    });
}
