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
                status = 'Ausente';
                break
            default:
                break;
        }

        const imagemPerfil = document.createElement('img');
        imagemPerfil.classList.add('imagem__perfil');

        switch (nome) {
            case 'Dolly':
                imagemPerfil.src = 'https://raw.githubusercontent.com/NikolasTola/orange-wall/main/imagens/avatar/dolly_perfil.png';
                break;
            case 'Brandão':
                imagemPerfil.src = 'https://raw.githubusercontent.com/NikolasTola/orange-wall/main/imagens/avatar/brands_perfil.png';
                break;
            case 'Nikolas':
                imagemPerfil.src = 'https://raw.githubusercontent.com/NikolasTola/orange-wall/main/imagens/avatar/nikolas_perfil.png';
                break;
            case 'Osmar':
                imagemPerfil.src = 'https://raw.githubusercontent.com/NikolasTola/orange-wall/main/imagens/avatar/osmar_perfil.png';
                break;
            case 'Pedro':
                imagemPerfil.src = 'https://raw.githubusercontent.com/NikolasTola/orange-wall/main/imagens/avatar/pedro_perfil.png';
                break;
            case 'Rúbia':
                imagemPerfil.src = 'https://raw.githubusercontent.com/NikolasTola/orange-wall/main/imagens/avatar/rubia_perfil.png';
                break;             
            default:
                break;
        }

        const avatar = document.createElement('img');
        avatar.src = linkAvatar;
        avatar.classList.add('avatar');

        const nomeOW = document.createElement('h1');
        nomeOW.classList.add('nome');
        nomeOW.innerHTML = nome;

        const nickSteam = document.createElement('a');
        nickSteam.classList.add('nick');
        nickSteam.innerHTML = nomeSteam;
        nickSteam.href = linkSteam;

        const statusAtual = document.createElement('h3');
        statusAtual.innerHTML = status;
        if (status == 'Jogando') {
            statusAtual.title = nomeJogo;
        }

        switch (status) {
            case 'Online':
                statusAtual.setAttribute('style', 'color: green');
                break;
            case 'Offline':
                statusAtual.setAttribute('style', 'color: gray');
                break;
            case 'Ausente':
                statusAtual.setAttribute('style', 'color: red');
                break;
            case 'Jogando':
                statusAtual.setAttribute('style', 'color: yellow; cursor: pointer');
                break;
                    
            default:
                break;
        }

        const cabecalho = document.createElement('div');
        cabecalho.classList.add('cabecalho__card');

        const card = document.createElement('div');
        card.classList.add('card');

        card.appendChild(cabecalho);
        card.appendChild(imagemPerfil);
        card.appendChild(avatar);
        card.appendChild(nomeOW);
        card.appendChild(nickSteam);
        card.appendChild(statusAtual);

        div__membros.appendChild(card)
    }
        

}

criaCards();
