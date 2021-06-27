//Creates new element with text content, appends to target div
function newTextElement(targetID, elementType, elementContent, elementID){

    //Identify "content" div
    const target = document.getElementById(targetID);
    
    //Create new element of given type
    const newElement = document.createElement(elementType);
    newElement.id = elementID;
    
    //Create text node for new element's content
    const newContent = document.createTextNode(elementContent);
    
    //Append text node to new element
    newElement.appendChild(newContent);
    
    //Append element to content div
    target.appendChild(newElement);
    };

//Creates menuPanel div within content div
function createMenuPanel(panelID){
    const menuPanel = document.createElement("div");
    menuPanel.className = "menuPanel";
    menuPanel.id = panelID;
    content.append(menuPanel);

    //Remove top margin of "content" div
    content.style.marginTop = "0px";
}

//Creates an item container in specified menu panel
function createItemContainer(targetPanel, thumbnail, itemName, itemPrice){
    const item = document.createElement("div");
    item.className = "itemContainer";
    
    //Append item title to item container
    const itemNameDiv = document.createElement("h2");
    itemNameDiv.textContent = itemName;
    item.append(itemNameDiv);

    //Add item price to item container
    const itemPriceDiv = document.createElement("h2");
    itemPriceDiv.textContent = itemPrice;
    item.append(itemPriceDiv);

    //Append thumbnail to item container
    const itemThumbnail = document.createElement("img");
    itemThumbnail.className = "thumbnail";
    itemThumbnail.src = `/src/assets/images/${thumbnail}`;
    item.append(itemThumbnail);
    
    //Append item container to targetPanel
    document.getElementById(targetPanel).append(item);
}

//Change ID of body element to display correct background image
function setBackground(){
    document.body.className = "menuPage";
}

//Package all function calls for exporting
function populate(){
    setBackground();
    newTextElement("content","h1","Appetizers");
    createMenuPanel("appPanel");
    createItemContainer("appPanel","breadsticks.jpeg","Breadsticks","$6.99");
    createItemContainer("appPanel","nachos.jpeg","Nachos","$9.99");
    createItemContainer("appPanel","sampler.jpeg","Sampler Platter","$11.99");
    createItemContainer("appPanel","wings.jpeg", "Chicken Wings","$10.99");
    newTextElement("content","h1","Entrees");
    createMenuPanel("entreePanel");
    newTextElement("entreePanel","h2","All entrees come with soggy fries. Substitute additional side for $2.99."
    ,"sidesMessage")
    createItemContainer("entreePanel","steak.jpeg","Steak","$16.99");
    createItemContainer("entreePanel","burger.jpeg", "Bacon Cheeseburger","$13.99");
    createItemContainer("entreePanel","ribs.jpeg", "Babyback Ribs","$21.99");
    createItemContainer("entreePanel","chicken.jpeg", "Grilled Chicken","$10.99");
    

}

export{
    populate,
}