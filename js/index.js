const template = document.getElementsByTagName('template')[0];
const header = document.createElement('h1');
header.id = "mainHeader";
const content = document.createTextNode("IntelliSrc");
header.appendChild(content);
const div = template.content.querySelector('div');
div.appendChild(header);
const child = document.importNode(div, true);
document.body.appendChild(child);