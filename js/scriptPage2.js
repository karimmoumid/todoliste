const boutton = document.querySelector("button");
let listeTaches = JSON.parse(localStorage.getItem("listeTaches")) ?? [];
// let i = listeTaches.length ?? 0;
boutton.addEventListener("click", function (event) {
    event.preventDefault();
    const tache = this.closest("form").querySelector("#tache");
    if (tache.value.length < 5) {
        alert("Veuillez entrer plus de 4 caracteres");
        return;
    };
    // listeTaches[i] = tache.value;
    listeTaches.push(tache.value);
    let jsonListeTache = JSON.stringify(listeTaches);
    localStorage.setItem("listeTaches", jsonListeTache);
    // i++;
    this.parentElement.reset();
    window.location.href = 'index.html';
})