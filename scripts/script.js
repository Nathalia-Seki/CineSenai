// var filme = []

// filme.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))

// filme.forEach((elemento) => {
//     document.querySelector("#filme").innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <img src="${elemento.img}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${elemento.nome}</h5>
//                 <p class="card-text">${elemento.data}</p>
//                 <button type="button" href="#" class="btn btn-primary">SINOPSE</button>
//             </div>
//         </div>
//     `
// })

var filmesIndex = []

filmesIndex.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
filmesIndex.push(new FilmesEmCartaz("Furiosa","07/06/2024","images/Filmes/Furiosa.jpg"))
filmesIndex.push(new FilmesEmCartaz("Garfield","07/06/2024","images/Filmes/garfild.jpg"))




filmesIndex.forEach((elemento) => {
    document.querySelector("#filmesIndex").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${elemento.img}" class="card-img-top h-75" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${elemento.nome}</h5>
                <p class="card-text">${elemento.data}</p>
                <a class="btn btn-dark" href="em_cartaz.html" role="button">VER MAIS</a>
            </div>
        </div>
    `
})


