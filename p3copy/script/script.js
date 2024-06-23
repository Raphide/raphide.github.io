const splash = document.querySelector(".splash");

document.addEventListener("click", (e) => {
    splash.classList.add("display-none");
    
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