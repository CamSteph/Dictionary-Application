const theme_switch_btn = document.querySelector('[data-theme-switch-btn]');
const circle_btn = theme_switch_btn.firstElementChild;

if(!sessionStorage.getItem('theme'))  sessionStorage.setItem('theme', 'light');

if(sessionStorage.getItem('theme') === 'light'){
    circle_btn.innerHTML = `<ion-icon name="moon" class="fs-1"></ion-icon>`;
}else{
    circle_btn.innerHTML = `<ion-icon name="sunny" class="fs-1"></ion-icon>`;
}

const toggleSwitch = () => {
    if(sessionStorage.getItem('theme') === 'light'){
        circle_btn.style.transform = 'translate(143%)';
        circle_btn.innerHTML = `<ion-icon name="sunny" class="fs-1"></ion-icon>`;
        sessionStorage.setItem('theme', 'dark');
        document.body.style.filter = "invert(1) saturate(10%) hue-rotate(200deg)";
        return;
    }
    circle_btn.style.transform = 'translate(0)';
    circle_btn.innerHTML = `<ion-icon name="moon" class="fs-1"></ion-icon>`;
    document.body.style.filter = "";
    sessionStorage.setItem('theme', 'light');
};

theme_switch_btn.addEventListener('click', toggleSwitch);