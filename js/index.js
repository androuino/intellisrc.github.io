const template = document.getElementsByTagName('template')[0];
const img = document.createElement('img');
img.id = "talkLogo";
img.src = "assets/logo.png"
img.alt = "Talk"
const desc = document.createElement('div')
desc.id = "talkLogo";
const name = document.createElement('h1');
name.id = "talkTitle"
const content = document.createTextNode("Talk App");
name.appendChild(content);
desc.appendChild(name);
const div = template.content.querySelector('div');
div.appendChild(img);
div.appendChild(desc);
const child = document.importNode(div, true);
document.body.appendChild(child);
