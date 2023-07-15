let button = document.querySelectorAll("button")
//console.log(button);

let model = document.querySelector("#model")




for (let i=0;i<button.length; i++){



function show(e){
    if(e.target.classList.contains('btn')){
        model.classList.add("showContent")

    }
    else if(e.target.classList.contains('fas')){
        model.classList.remove("showContent")
    }
}
    button[i].addEventListener('click',show)
 }  






// let open = document.querySelector(".modal-btn").addEventListener("click",()=>{
//     let para = document.querySelector('.modal-overlay')
//     para.classList.add("showContent")
// })

// let close = document.querySelector(".close-btn").addEventListener("click",()=>{
//     let para = document.querySelector('.modal-overlay')
//     para.classList.remove("showContent")
// })