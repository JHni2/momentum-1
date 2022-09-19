const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

JSON.parse
let toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //toDos array 내용을 localStorage에 넣기
}

function deleteToDo(event) {
  const li = event.target.parentElement //target: 버튼, parentElement: 해당 버튼의 li
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) //'X'버튼을 누르지 않은 toDo는 남겨놓기
  saveToDos()
}

function paintToDo(newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerText = newTodo.text //paintToDo가 object를 받기 때문에 text를 출력해야 한다
  const button = document.createElement("button")
  button.innerText = "X"
  button.addEventListener("click", deleteToDo)
  li.appendChild(button)
  li.appendChild(span)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault() //브라우저의 기본 동작을 막는다
  const newTodo = toDoInput.value //input의 현재 value를 새 변수에 복사 
  toDoInput.value = "" //엔터 후 빈칸으로 만들기
  const newToDoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newToDoObj) //newToDoObj를 toDos 배열에 담기
  paintToDo(newToDoObj) //newToDoObj를 toDos 배열에 담기
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDOs = localStorage.getItem(TODOS_KEY)

if (savedToDOs !== null) {
  const parsedToDos = JSON.parse(savedToDOs) //string을 array로 변환
  toDos = parsedToDos //toDos가 빈 값으로 시작되지 않고 이전의 parseToDos을 복원
  parsedToDos.forEach(paintToDo)
}