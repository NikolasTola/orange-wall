const carregaAPI = async () => {

    const respostaAPI = await fetch(`https://steam-api-seven.vercel.app/api/membros`);
    console.log(respostaAPI);
    
};

carregaAPI();