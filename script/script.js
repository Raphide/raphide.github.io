
const proj1 = document.getElementById("project1");
const proj2 = document.getElementById("project2");
const proj3 = document.getElementById("project3");
const proj4 = document.getElementById("project4");

const projImg = document.getElementById("proj-pic");
const projTitle = document.getElementById("projTitle");
const projDesc = document.getElementById("projDesc");
const repo = document.getElementById("repo");

proj1.addEventListener("click", () => {
    projImg.src = "https://raw.githubusercontent.com/Raphide/ToDo-App/main/src/assets/todo.png";
    projTitle.innerText = "Todo application"
    projDesc.innerText = "A full stack Todo application to create and keep track of tasks. Created in React and TypeScript for the front end and Java, Spring Boot and MySQL database for the back end"
    repo.href ="https://github.com/Raphide/ToDo-App";
});

proj2.addEventListener("click", () => {
    projImg.src ="https://raw.githubusercontent.com/Raphide/EShop/main/src/assets/Screenshot%202024-09-04%20160046.png";
    projTitle.innerText = "E-Shop"
    projDesc.innerText = "A fake E-Commerce platform for my fictional beverage company CANZ. Created in React and Javascript for the front end it utilises Google's Firebase for the product and cart databases."
    repo.href ="https://github.com/Raphide/EShop";
});
proj3.addEventListener("click", () => {
    projImg.src ="https://raw.githubusercontent.com/Raphide/GoogleBooks/main/src/assets/googlebooks.png";
    projTitle.innerText = "Google Books"
    projDesc.innerText = "A search engine made in React and Javascript that utilises Google's Google Book API."
    repo.href ="https://github.com/Raphide/GoogleBooks";
});
proj4.addEventListener("click", () => {
    projImg.src ="https://raw.githubusercontent.com/Raphide/minesweeper/main/minesweeper/minesweeper.png";
    projTitle.innerText = "Minesweeper"
    projDesc.innerText = "A game of Minesweeper made in pure Java. Made to be played on the Java CLI."
    repo.href ="https://github.com/Raphide/minesweeper";
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