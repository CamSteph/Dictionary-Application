// if(sessionStorage.getItem('theme') === 'light'){
//     document.body.style.filter = "";
//     sessionStorage.setItem('theme', 'light');
// }else{
//     document.body.style.filter = "invert(1) saturate(10%) hue-rotate(200deg)";
//     sessionStorage.setItem('theme', 'dark');
// }

setTimeout(() => {
    if(sessionStorage.getItem('theme') === 'light'){
        document.body.style.filter = "";
        sessionStorage.setItem('theme', 'light');
        console.log('light theme')
    }else{
        document.body.style.filter = "invert(1) saturate(10%) hue-rotate(200deg)";
        sessionStorage.setItem('theme', 'dark');
        console.log('dark theme')
    }
}, .1);