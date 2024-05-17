const carregaAPI_Jogos = async () => {

    const respostaAPI = await fetch(`https://steam-api-seven.vercel.app/api/jogos`);
    
    if(respostaAPI.status == 200){

        const dadosJogos = await respostaAPI.json();
        console.log(dadosJogos);
        return dadosJogos;
        
    }
};

carregaAPI_Jogos();