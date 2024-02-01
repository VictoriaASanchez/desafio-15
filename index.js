const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const btnPressed = btn.textContent;
        console.log(btnPressed);

        if (btn.id === 'reset') {
            display.textContent = '0';
            return;
        }

        if (btn.id === 'delete') {
            if (display.textContent.length === 1 || display.textContent === 'Error') {
                display.textContent = '0';
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if(btn.id === 'equal') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
            return;
        }

        if (display.textContent === '0' || display.textContent === 'Error') {
            display.textContent = btnPressed;
        } else {
            display.textContent += btnPressed;
        }
    })
});