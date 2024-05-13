const carregaAPI = async () => {

    const respostaAPI = await fetch(`https://steam-api-seven.vercel.app/api/tempo`);
    console.log(respostaAPI);
    
};

carregaAPI();