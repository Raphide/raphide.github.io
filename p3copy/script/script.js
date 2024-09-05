const splash = document.querySelector(".splash");

document.addEventListener("click", (e) => {
    splash.classList.add("display-none");
    
});

const proj1 = document.getElementById("project1");
const proj2 = document.getElementById("project2");
const proj3 = document.getElementById("project3");
const proj4 = document.getElementById("project4");

const projImg = document.getElementById("proj-pic");
const ProjTitle = document.getElementById("projTitle");
const ProjDesc = document.getElementById("projDesc");

proj1.addEventListener("click", function(){
    projImg.src = "https://raw.githubusercontent.com/Raphide/ToDo-App/main/src/assets/todo.png";
});

proj2.addEventListener("click", function(){
    projImg.setAttribute(src="https://raw.githubusercontent.com/Raphide/EShop/main/src/assets/Screenshot%202024-09-04%20160046.png");
});


// if (sessionStorage.getItem("visited") !== 'true'){
   
//     document.getElementById(splash);}
    
//     else {
//     document.getElementById(splash).style.display="none";
//     // else (when above if statement is not met) hide the loader
//     }
    
    
//     sessionStorage.setItem(splash,'true');
    

// //not working
// // sessionStorage.setItem("shown", true);
// //     if (!sessionStorage.getItem("shown")) showScreen(splash);


// // //not working either
// //     if (sessionStorage.getItem("visited")) {
// //         splash.classList.add("display-none");
// //     }
// //     localStorage.setItem("visited", "true");