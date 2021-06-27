
//Change ID of body element to display correct background image
function setBackground(){
    document.body.className = "aboutPage";
}
//Creates new element with text content, appends to target div
function newTextElement(targetID, elementType, elementContent, elementID){

    //Identify "content" div
    const target = document.getElementById(targetID);
    
    //Create new element of given type
    const newElement = document.createElement(elementType);
    newElement.id = elementID;
    
    //Add given content to new element
    newElement.innerHTML = elementContent;
    
    //Append element to content div
    target.appendChild(newElement);
};
//Creates new image element, appends to div
function newImgElement(targetID, imgSrc, imgID){
    
    //Identify "content" div
    const content = document.getElementById(targetID);
    
    //Create new img element
    const newImg = document.createElement("img");
    
    //Assign image source
    newImg.src = imgSrc;
    
    //Assign image ID
    newImg.id = imgID;
    
    //Append image to content div
    content.appendChild(newImg);
    };

//Creates "aboutPanel" div to contain text content
function createAboutPanel(){
    const aboutPanel = document.createElement("div");
    aboutPanel.className = "aboutPanel";
    aboutPanel.id = "aboutPanel";
    content.append(aboutPanel);
    console.log(aboutPanel);

    //Remove top margin of "content" div
    content.style.marginTop = "0px";
}



function populate(){
    setBackground();
    newTextElement("content","h1","About Us");
    createAboutPanel();
    newTextElement("aboutPanel","h2","&#x2003;&#x2003; Our motto is simple - maximize profits by minimizing quality. The pictures on the Menu page are from the Applebees website. To the right is a stock photo of an Italian chef. You can tell he is Italian because of his facial hair and hand gestures. There is also more text contained in this paragraph, the purpose of which is to fill more space. Capitalism is cool and all but the Waltons don't seem like good people. This is the last sentence in the current paragraph until I add more.");
    newImgElement("aboutPanel","/src/assets/images/chef.jpg","chefPic");
}

export{
    populate,
}