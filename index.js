// practice

let mainDiv = document.getElementById("mainDiv");
let box1 = document.getElementsByClassName("box1");
let box2 = document.getElementsByClassName("box2");
let box3 = document.getElementsByClassName("box3");
let p = document.getElementById("para")

// bubbling 


mainDiv.addEventListener("click", ()=>{
  console.log("parent");
})
box1[0].addEventListener("click", ()=>{
  console.log("child");
})
box2[0].addEventListener("click", (e)=>{
    // e.stopPropagation()
  console.log("grandchildern");
})
box3[0].addEventListener("click", ()=>{
  console.log("ggchild");
})

// capturing


mainDiv.addEventListener("click", ()=>{
    console.log("parent");
  }, true)
  box1[0].addEventListener("click", ()=>{
    console.log("child");
  }, true)
  box2[0].addEventListener("click", ()=>{
      // e.stopPropagation()
    console.log("grandchildern");
  }, true)
  box3[0].addEventListener("click", ()=>{
    console.log("ggchild");
  }, true)

// event delegation

mainDiv.addEventListener("click", (e)=>console.log(e.target.innerText))