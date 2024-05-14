const carregaAPI = async () => {

    const respostaAPI = await fetch(`https://steam-api-seven.vercel.app/api/membros`);
    
    if(respostaAPI.status == 200){

        const dados = await respostaAPI.json();

        return dados;
        
    }
};