var filmesPage = []

filmesPage.push(new FilmesEmCartazPage("Divertidamente 2","1h36m","Dublado","Divertida Mente 2 marca a sequência da famosa história de Riley (Kaitlyn Dias). Com um salto temporal, a garota agora se encontra mais velha, passando pela tão temida adolescência. Junto com o amadurecimento, a sala de controle mental da jovem também está passando por uma demolição para dar lugar a algo totalmente inesperado: novas emoções. As já conhecidas, Alegria (Amy Poehler), Tristeza (Phyllis Smith), Raiva, Medo (Tony Hale) e Nojinho (Liza Lapira), que há muito tempo administram uma operação bem-sucedida, não têm certeza de como se sentir quando novos inquilinos chegam ao local, sendo um deles a tão temida Ansiedade (Maya Hawke).","14:00","16:00","","","images/Filmes/divertida-mente-2-.jpg"))
filmesPage.push(new FilmesEmCartazPage("Furiosa","2h29m","Legendado","A jovem Furiosa cai nas mãos de uma grande horda de motoqueiros liderada pelo senhor da guerra Dementus. Varrendo Wasteland, eles encontram a Cidadela, presidida pelo Immortan Joe. Enquanto os dois tiranos lutam pelo domínio, Furiosa logo se vê em uma batalha ininterrupta para voltar para casa.","14:00","16:00","","","images/Filmes/Furiosa.jpg"))
filmesPage.push(new FilmesEmCartazPage("Garfield","1h41m","Dublado","Garfield tem um reencontro inesperado com seu pai, que estava há muito tempo desaparecido - um gato de rua todo desengonçado que atrai o filho para um assalto de alto risco.","14:00","16:00","","","images/Filmes/garfild.jpg"))
filmesPage.push(new FilmesEmCartazPage("Guerra Civil","1h49m","Legendado","Dirigido pelo premiado Alex Garland (Ex Machina), Guerra Civil apresenta uma mistura de ação e suspense, ambientado em um futuro não tão distante, quando uma guerra civil se instaura nos Estados Unidos. Neste cenário, uma equipe pioneira de jornalistas de guerra, onde estão Lee (Kirsten Dunst) e seu colega de trabalho Joel (Wagner Moura), viajam pelo país para registrar a dimensão e a situação de um cenário violento que tomou as ruas em uma rápida escalada, envolvendo toda a nação. No entanto, o trabalho de registro se transforma em uma guerra de sobrevivência quando eles também se tornam o alvo. O elenco conta ainda com nomes como Stephen McKinley Henderson, Jesse Plemmons e Nick Offerman.","19:00","21:00","","","images/Filmes/guerra-civil.jpg"))
filmesPage.push(new FilmesEmCartazPage("Bad Boys: Até o fim","1h55m","Legendado","Bad Boys: Até o Fim é o quarto filme da icônica saga de ação estrelada por Will Smith e Martin Lawrence, iniciada em 1995 com Os Bad Boys, dirigido por Michael Bay. Desta vez, o longa conta com Adil El Arbi e Bilall Fallah na direção e o roteiro fica por conta de Chris Bremnerirá. O quarto filme da franquia vai mostrar como os detetives mais famosos de Miami, Mike Lowrey (Smith) e Marcus Burnett (Lawrence), enfrentam uma reviravolta dramática: agora, eles que são os mais procurados! A caça virou o caçador e com direito a um prêmio pela suas cabeças. Com uma mistura característica de ação eletrizante e comédia escrachada, os dois lutarão lado a lado contra tudo e contra todos até o fim para proteger a reputação do capitão Howard e limpar seus nomes. Prepare-se para ver os Bad Boys preferidos do mundo enfrentando todos os obstáculos em uma aventura emocionante de tirar o fôlego.","17:00","21:30","","","images/Filmes/bad-boys.jpg"))
filmesPage.push(new FilmesEmCartazPage("Grande Sertão","1h55m","Nacional","Grande Sertão é do mesmo diretor de O Auto da Compadecida (2000) e Lisbela e o Prisioneiro (2003). Moradores de um lugar violento, dominado pelo crime, chamado Grande Sertão, Riobaldo e Diadorim se conhecem desde jovens. Lá, eles cresceram e trilharam caminhos diferentes. Ele (Caio Blat) virou professor e ela (Luisa Arraes) parte da bandidagem. Riobaldo testemunha o dia a dia da guerra travada entre bandidos e policiais. Apaixonado por Diadorim (Luisa Arraes), ele acaba entrando para o mundo do crime. Agora, precisará lidar com sua escolha, e enfrentar questões éticas e morais em meio a inúmeras situações de extrema violência. Adaptação do clássico Grande Sertão: Veredas, de Guimarães Rosa.","14:00","16:00","","","images/Filmes/grande-sertao.jpg"))


filmesPage.forEach((elemento) => {
    document.querySelector("#filmesPage").innerHTML += `
        <div class="card w-75 p-3">
            <div class="card-header d-flex justify-content-end gap-2 ">
                <a id="poltronas" href="#" class="btn rounded-circle" data-bs-toggle="modal" data-bs-target="#modalPoltronas"></a>
                <a id="precoIngresso" href="#" class="btn rounded-circle" data-bs-toggle="modal" data-bs-target="#modalPreco"></a>
            </div>
            <div class="card-body d-flex gap-3">
                <img src="${elemento.img}" class="card-img-top w-25 h-100" alt="...">
                <div class="flex-direction-column">
                    <h5 class="card-title">${elemento.nome}</h5>
                    <p class="card-text">${elemento.duracao}</p>
                    <p>${elemento.linguagem}</p>
                    <p>${elemento.sinopse}</p>
                    <p>${elemento.horario1}</p>
                    <p>${elemento.horario2}</p>
                    <p>${elemento.horario3}</p>
                    <p>${elemento.horario4}</p>
                </div>     
            </div>
        </div>
    `
})

// seleção
$("#btn01").on("click",function(){
    if( $("#btn01").attr("class") == "bg-trasnparent"){
        $("#btn01").attr("class","bg-success");
    }else{
        $("#btn01").attr("class","bg-trasnparent");
    }
})


