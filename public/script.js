setTimeout(() => {
    let body = document.querySelector('body');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) { //если на устройтсве включена тёмная тема
        body.classList.add('dark');
        body.style.setProperty('--colorBg', 'black');
        body.style.setProperty('--colorText', 'white');
    } else {
        body.classList.add('light');
    }

}, 1000);
setTimeout(() => {
    let body = document.querySelector('body');
    let buttonTeme = document.querySelector('.lightTeme');
    console.log(buttonTeme);
    buttonTeme.onclick = function () {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            body.style.setProperty('--colorBg', 'white');
            body.style.setProperty('--colorText', 'black');
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            body.style.setProperty('--colorBg', 'black');
            body.style.setProperty('--colorText', 'white');
        }
    };
}, 1500);