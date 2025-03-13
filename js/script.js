let listeTache = JSON.parse(localStorage.getItem("listeTaches")) ?? [];
console.log(listeTache);
for(let tache of listeTache){
let template = document.querySelector("#tache");
let liste =document.querySelector("ul");
let clone = template.content.cloneNode(true);
clone.querySelector("label").textContent=tache;
liste.appendChild(clone);
}
