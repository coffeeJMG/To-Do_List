const loginForm = document.querySelector('.screen-header_login');
const loginInput =document.querySelector('.screen-header_login input');
const greeting =document.querySelector('#greeting');


function onLoginSubmit(event){

    event.preventDefault();

    loginForm.classList.add('hidden');
    const username = loginInput.value;
    localStorage.setItem('username', username);
    paintGreetings(username);


}

function paintGreetings(username){
    greeting.innerText =
    `안녕하세요 ${username}님
    
    `;
    greeting.classList.remove('hidden');
}

const savedUsername = localStorage.getItem('username');

if(savedUsername ===null){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintGreetings(savedUsername)
    loginForm.classList.add('hidden');
}