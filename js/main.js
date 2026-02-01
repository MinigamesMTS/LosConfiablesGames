fetch("juegos.json")
  .then(res => res.json())
  .then(juegos => {

    const lista = document.getElementById("lista-juegos");

    if (lista) {
      for (let id in juegos) {
        const juego = juegos[id];

        lista.innerHTML += `
          <div class="card">
            <img src="${juego.imagen}">
            <h3>${juego.titulo}</h3>
            <a href="juego.html?id=${id}">Ver juego</a>
          </div>
        `;
      }
    }

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id && juegos[id]) {
      document.getElementById("titulo").innerText = juegos[id].titulo;
      document.getElementById("imagen").src = juegos[id].imagen;
      document.getElementById("descripcion").innerText = juegos[id].descripcion;
      document.getElementById("trailer").src = juegos[id].trailer;

      const linksDiv = document.getElementById("links");
      juegos[id].links.forEach(link => {
        linksDiv.innerHTML += `
          <a href="${link.url}" target="_blank">${link.nombre}</a><br>
        `;
      });
    }
});
