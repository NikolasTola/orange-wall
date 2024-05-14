const div__membros = document.querySelector('#div__membros');

const criaCards = async () => {
    const dadosMembros = await carregaAPI();

    for (let i = 0; i < dadosMembros.dados.length; i++) {
        
        let nome = dadosMembros.dados[i].nome;
        let nomeSteam = dadosMembros.dados[i].personaname;
        let linkSteam = dadosMembros.dados[i].profileurl;
        let linkAvatar = dadosMembros.dados[i].avatarfull;
        let statusNum = dadosMembros.dados[i].personastate;
        let status;
        let nomeJogo = dadosMembros.dados[i].gameextrainfo;

        if(nomeJogo){
            statusNum = 2;
        }
        switch (statusNum) {
            case 0:
                status = 'Offline';
                break;
            case 1:
                status = 'Online';
                break
            case 2:
                status = 'Jogando';
                break
            case 3:
                status = 'Ocupado';
                break
            default:
                break;
        }
        const avatar = document.createElement('img');
        avatar.src = linkAvatar;
        avatar.classList.add('avatar');

        const nomeOW = document.createElement('h1');
        nomeOW.innerHTML = nome;

        const nickSteam = document.createElement('a');
        nickSteam.innerHTML = nomeSteam;
        nickSteam.href = linkSteam;

        const statusAtual = document.createElement('h3');
        statusAtual.innerHTML = status;
        if (status == 'Jogando') {
            statusAtual.title = nomeJogo;
        }

        const cabecalho = document.createElement('div');
        cabecalho.classList.add('cabecalho__card');

        const card = document.createElement('div');
        card.classList.add('card');

        card.appendChild(cabecalho);
        card.appendChild(avatar);
        card.appendChild(nomeOW);
        card.appendChild(nickSteam);
        card.appendChild(statusAtual);

        div__membros.appendChild(card)
    }
        

}

criaCards();
