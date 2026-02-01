fetch("juegos.json")
  .then(response => response.json())
  .then(juegos => {

    // ----- INDEX -----
    const lista = document.getElementById("lista-juegos");

    if (lista) {
      for (let id in juegos) {
        const j = juegos[id];
        lista.innerHTML += `
          <div class="card">
            <img src="${j.imagen}">
            <h3>${j.titulo}</h3>
            <a href="juego.html?id=${id}">Ver juego</a>
          </div>
        `;
      }
    }

    // ----- JUEGO -----
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

  })
  .catch(error => {
    console.error("Error cargando juegos.json:", error);
  });


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
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("juegos.json")
  .then(res => res.json())
  .then(data => {
    const juego = data[id];

    document.getElementById("titulo").textContent = juego.titulo;
    document.getElementById("imagen").src = juego.imagen;
    document.getElementById("descripcion").textContent = juego.descripcion;
    document.getElementById("trailer").src = juego.trailer;

    const linksDiv = document.getElementById("links");
    let linksHTML = "";

    juego.links.forEach(link => {
      linksHTML += `
        <a class="link-descarga ${link.clase}" href="${link.url}" target="_blank">
          ${link.nombre}
        </a>
      `;
    });

    linksDiv.innerHTML = linksHTML;
  });


