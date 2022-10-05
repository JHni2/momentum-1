const images = ["1.png", "2.png", "3.png"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}` //<img src="img/1.jpeg">

// //appenChild(): body에 html을 추가한다
// document.body.appendChild(bgImage)