const themeChange = document.getElementById('themeChange');
themeChange.addEventListener("change", changeTheme);

function changeTheme(ev){
   let body = document.getElementById('body');
   body.removeAttribute('class');
   body.classList.add(ev.target.value);
}