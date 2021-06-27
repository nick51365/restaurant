import "./styles.css";
import * as pageLoad from "./page-load.js";
import * as menu from "./menu.js";
import * as about from "./about.js";

//Identify "content" div
const contentDiv = document.getElementById("content");

//Initialize homepage
homePage();

//Identify buttons in nav bar and assign to variables
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");

//Assign event listeners to buttons in nav bar
homeBtn.addEventListener("click", () => homePage());
menuBtn.addEventListener("click", () => menuPage());
aboutBtn.addEventListener("click",() => aboutPage()); 


//Clears "content" div and populates homepage content
function homePage(){
contentDiv.innerHTML = "";
pageLoad.populate();
};

//Clears "content" div and populates with menu page content
function menuPage(){
contentDiv.innerHTML = "";
menu.populate();
};

//Clears "content" div and populates with about apge content
function aboutPage(){
contentDiv.innerHTML = "";
about.populate();

}
