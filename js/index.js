const template = document.getElementsByTagName('template')[0];
const img = document.createElement('img');
img.id = "leftMainImg";
img.src = "assets/steak.jpg"
img.alt = "Steak"
const desc = document.createElement('div')
desc.id = "leftMainImgDesc";
const name = document.createElement('h1');
name.id = "steakMenu"
const story = document.createElement('h2');
story.id = "story"
const storyTell = document.createTextNode("Juicy, bone-in and extra marbled for maximum tenderness. Our chefs recommend ordering these cuts in the Wood-Fire Grill preparation: seasoned and flame grilled over oak wood for a delicious natural flavor.")
story.appendChild(storyTell);
const content = document.createTextNode("Juicy Steak");
const buttonAddToCart = document.createElement('button');
const buttonContainer = document.createElement('div');
buttonContainer.id = "buttonContainer";
buttonAddToCart.id = "buttonAddToCart";
const buttonContent = document.createTextNode("ADD TO MY ORDER");
buttonAddToCart.appendChild(buttonContent);
buttonContainer.appendChild(buttonAddToCart);
name.appendChild(content);
desc.appendChild(name);
desc.appendChild(story);
desc.appendChild(buttonContainer);
const div = template.content.querySelector('div');
div.appendChild(img);
div.appendChild(desc);
const child = document.importNode(div, true);
document.body.appendChild(child);
