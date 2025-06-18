function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('CONECTANDO AO BD', rand(1000, 3000))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(232, rand(1000, 3000))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('TRATANDO DADOS DA BASE', rand(1000, 3000))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch(e => {
        console.log('ERRO:', e);
    })
