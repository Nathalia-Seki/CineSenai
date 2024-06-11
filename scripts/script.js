var filmesIndex = []

filmesIndex.push(new FilmesEmCartaz("Divertidamente 2","images/Filmes/divertida-mente-2-.jpg"))
filmesIndex.push(new FilmesEmCartaz("Furiosa","images/Filmes/Furiosa.jpg"))
filmesIndex.push(new FilmesEmCartaz("Garfield","images/Filmes/garfild.jpg"))

filmesIndex.forEach((elemento) => {
    document.querySelector("#filmesIndex").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${elemento.img}" class="card-img-top h-75" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${elemento.nome}</h5>
                <a class="btn btn-dark" href="em_cartaz.html" role="button">VER MAIS</a>
            </div>
        </div>
    `
})

