function mostrarMaterias() {
    document.getElementById('materias-principais').style.display = 'flex';
    document.getElementById('materias').style.display = 'flex';

    document.getElementById('agenda-usuario').style.display = 'none';
    document.getElementById('anotacoes').style.display = 'none';
    document.getElementById('materia-portugues').style.display = "none";
    document.getElementById('materia-matematica').style.display = "none";
    document.getElementById('materia-quimica').style.display = "none";
    document.getElementById('materia-biologia').style.display = "none";
    document.getElementById('materia-geografia').style.display = "none";
    document.getElementById('materia-historia').style.display = "none";
    document.getElementById('mostrar-mapa').style.display = 'none';
}

function materiaEscolhida(materia) {
    document.getElementById('materias-principais').style.display = "none";

    document.getElementById('materia-portugues').style.display = "none";
    document.getElementById('materia-matematica').style.display = "none";
    document.getElementById('materia-quimica').style.display = "none";
    document.getElementById('materia-biologia').style.display = "none";
    document.getElementById('materia-geografia').style.display = "none";
    document.getElementById('materia-historia').style.display = "none";

    if(materia == 'portugues') 
        document.getElementById('materia-portugues').style.display = "flex";
    else if(materia == 'matematica')
        document.getElementById('materia-matematica').style.display = "flex";
    else if(materia == 'quimica') 
        document.getElementById('materia-quimica').style.display = "flex";
    else if(materia == 'biologia')
        document.getElementById('materia-biologia').style.display = "flex";
    else if(materia == 'geografia')
        document.getElementById('materia-geografia').style.display = "flex";
    else if(materia == 'historia')
        document.getElementById('materia-historia').style.display = "flex";
}

function materiaSecundaria(id) {
    var iframe = "";
    document.getElementById('mostrar-mapa').innerHTML = '';

    if(id == 1 || id == 2) {
        document.getElementById('materia-portugues').style.display = "none";
        if(id == 1) {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zw7T2pPjJiGJpIbH/a26e0aa261f2af7624752f5447514b5ae4921dd144430c89f544b4c90cf19bd3' frameborder='0' allowfullscreen></iframe>";
        }
        else {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zw8AaO2sEHE5KbD4/80ea85c65ab473ae1a9cea23bd6a8652430d785936b232c6f7d8931ec8692fbe' frameborder='0' allowfullscreen></iframe>";
        }
    }
    else if(id == 3 || id == 4) {
        document.getElementById('materia-matematica').style.display = "none";
        if(id == 3) {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zw8BfZPjJiGJz6XT/46abbbb5bc3ddc5eff76223a00bd4860e42f21761231bdbae5ae3847b24c50a7' frameborder='0' allowfullscreen></iframe>"
        }
        else {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zw8CqZPjJiGJ0AjV/865e8563edc491933dfc551e6bbba7d37686f2d7ca0b879bc6ba5d80d47c9ce0' frameborder='0' allowfullscreen></iframe>"
        }
    }
    else if(id == 5 || id == 6) {
        document.getElementById('materia-quimica').style.display = "none";
        if(id == 5) {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zw8C_fb3UX4YbjRk/4279f63fda2ac85d7048baf890fdc6f9fb36242acadb25f7c5431bdb87268204' frameborder='0' allowfullscreen></iframe>"
        }
        else {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zw8DIvb3UX4YbkY5/cb24a4fd677b27161716ce8a47d8dfc9cc10fa60c3a69c7d05fdfc59ebf02479' frameborder='0' allowfullscreen></iframe>"
        }
    }
    else if(id == 7 || id == 8) {
        document.getElementById('materia-biologia').style.display = "none";
        if(id == 7) {
            iframe = "<iframe src='https://embed.coggle.it/diagram/ZxqW8JPjJiGJGpbx/0de9b16137fe26899a655963df715b70d5a65661abceb55e3c8deaa7ce5df0e5' frameborder='0' allowfullscreen></iframe>"
        }
        else {
            iframe = "<iframe src='https://embed.coggle.it/diagram/ZxqbZO2sEHE5fZLl/e82cfab1ef50541eab6e95ebe4b034fe85f7b3f1b6cb0c1e2b9fc21a723d157d' frameborder='0' allowfullscreen></iframe>"
        }
    }
    else if(id == 9 || id == 10) {
        document.getElementById('materia-geografia').style.display = "none";
        if(id == 9) {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zxqbu-2sEHE5fcGr/17d9523846376562da828b28617b59dfbb380f2299dfd3fb4b0f9172187f06da' frameborder='0' allowfullscreen></iframe>"
        }
        else {
            iframe = "<iframe src='https://embed.coggle.it/diagram/Zxqb8JPjJiGJHgei/5fa54961eaa95bd7584ac3faa541af02c508da63abc6fa3e2c50eac3820e9f2a' frameborder='0' allowfullscreen></iframe>"
        }
    }
    else if(id == 11 || id == 12) {
        document.getElementById('materia-historia').style.display = "none";
        if(id == 11) {
            iframe = "<iframe src='https://embed.coggle.it/diagram/ZxqcO-2sEHE5fkZK/b13a0b4fe0b477d1754881f1bf59ee02163c0ea9938a93bf1ebf374bce8665f0' frameborder='0' allowfullscreen></iframe>"
        }
        else {
            iframe = "<iframe src='https://embed.coggle.it/diagram/ZxqcVfb3UX4YuROn/b9ba31b40fe418be75343e354901c1c448d1d94f7402d35d65c292d858b89c96' frameborder='0' allowfullscreen></iframe>"
        }
    }
    mostrarIframe(iframe)
}

function mostrarIframe(iframe) {
    document.getElementById('mostrar-mapa').innerHTML = iframe;
    document.getElementById('mostrar-mapa').style.display = 'flex';
}