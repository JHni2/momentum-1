const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden" //일반적으로 string만 포함된 변수는 대문자로 표기한다
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault() //브라우저의 기본 동작을 막는다
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username) //setItem(key, value)
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `${username}'s To Do`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME)
  paintGreetings(savedUserName)
}