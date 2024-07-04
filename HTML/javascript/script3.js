// //document object model
// function contManuplate(){
// document.title = "Kgcas";
// let elem = document.getElementById("head")
// elem.innerHTML = "<h1>Wel come</h1>"
// // console.log()
// }
// setTimeout(contManuplate,5000);

function darkmode(){
    document.body.style.backgroundColor = "hotpink";
    let elem = document.getElementById("head")
    elem.innerHTML = "<h1>Wel come</h1>"
    document.body.style.color = "black";
     let button = document.getElementById("button")
     button.innerHTML =`<i class='bx bxs-moon'></i>`;
     button.innerHTML += "Lightmode";
     
    
    
}
function Lightmode(){
    document.body.style.backgroundColor = "skyblue";
    document.body.style.color = "black";
     let button = document.getElementById("button")
     button.innerHTML = `<i class='bx bxs-sun'></i>`;
     button.innerHTML += "darkmode";
    
    
}
function modechange(){
    let btext = document.getElementById("button").innerText
    if(btext=="darkmode"){
        darkmode();
    }else if(btext=="Lightmode"){
        Lightmode();
    }

}
