// catálogo filmes página index
class FilmesEmCartaz {
    constructor (nome, img){
        this.nome = nome,
        this.img = img
    }
}

var teste = new FilmesEmCartaz("NomeFilme","img")

// catálogo página filmes em cartaz
class FilmesEmCartazPage {
    constructor (nome, horario1,horario2,horario3,horario4, img){
        this.nome = nome,
        this.horario1 = horario1,
        this.horario2 = horario2,
        this.horario3 = horario3,
        this.horario4 = horario4,
        this.img = img
    }
}

var teste2 = new FilmesEmCartazPage("NomeFilme","horarioFilme1","horarioFilme2","horarioFilme3","horarioFilme4","img")
