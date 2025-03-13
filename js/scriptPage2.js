const boutton = document.querySelector("button");
let listeTaches = JSON.parse(localStorage.getItem("listeTaches")) ?? [];
let i = listeTaches.length ?? 0;
boutton.addEventListener("click", function (event) {
    event.preventDefault();
    if (this.closest("form").querySelector("#tache").value.length < 5) {
        alert("Veuillez entrer plus de 4 caracteres");
        return;
    };
    listeTaches[i] = this.closest("form").querySelector("#tache").value;
    let jsonListeTache = JSON.stringify(listeTaches);
    localStorage.setItem("listeTaches", jsonListeTache);
    i++;
    this.closest("form").querySelector("#tache").value=null;
    window.location.href = 'index.html';
})