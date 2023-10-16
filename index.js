console.log("Hello World!")
// heere is all the react code
let appContainer = document.querySelector("#app")

appContainer.innerHTML = "<h1>Here is my react code</h1>"


// this will be abstracted away from us!!!! 👇
// component -> return -> JSX -> HTML
let button = document.createElement("button")
button.innerText = "Click Me"
appContainer.appendChild(button)

//<button>Click Me</button>

// DX - Developer Experience
