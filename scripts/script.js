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

var teste1 = []

teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))
teste1.push(new FilmesEmCartaz("Divertidamente 2","07/06/2024","images/Filmes/divertida-mente-2-.jpg"))



teste1.forEach((elemento) => {
    document.querySelector("#teste1").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${elemento.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${elemento.nome}</h5>
                <p class="card-text">${elemento.data}</p>
                <button type="button" href="#" class="btn btn-primary">SINOPSE</button>
            </div>
        </div>
    `
})


