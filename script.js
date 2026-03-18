document.addEventListener("DOMContentLoaded", () => {

const typing = document.getElementById("typing")

const texts = [
"Software Developer",
"Full Stack Developer",
"Problem Solver",
"Tech Enthusiast"
]

let textIndex = 0
let charIndex = 0
let deleting = false

function type(){

const current = texts[textIndex]

typing.textContent = deleting
? current.substring(0,charIndex--)
: current.substring(0,charIndex++)

if(!deleting && charIndex > current.length){

deleting = true
setTimeout(type,1500)

}
else if(deleting && charIndex < 0){

deleting = false
textIndex = (textIndex + 1) % texts.length
setTimeout(type,500)

}
else{

setTimeout(type, deleting ? 40 : 100)

}

}

type()


/* CURSOR GLOW */

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})


/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active")

}

})

},{threshold:0.15})

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el)
})

})
