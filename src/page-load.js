//Creates new element with text content, appends to "content" div
function newTextElement(elementType, elementContent, elementID){

    //Create new element of given type
    const newElement = document.createElement(elementType);
    newElement.id = elementID;
    
    //Create text node for new element's content
    const newContent = document.createTextNode(elementContent);

    
    //Append text node to new element
    newElement.appendChild(newContent);
    
    //Append element to content div
    content.appendChild(newElement);
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

//Styles "content" div
function styleContent(){

    //Style "content" div
    content.style.backgroundColor = "transparent";
    content.style.marginTop = "160px"
}

//Sets background image
function setBackground(){
    document.body.className = "homePage";
}

//Populates homepage with desired content
function populate(){
    newTextElement("h1", "FOOD PLACE","homeTitle");
    newTextElement("h2","Carbon-based matter for human consumption","homeSubtitle");
    setBackground();
    styleContent();
}

export{
    populate,
};