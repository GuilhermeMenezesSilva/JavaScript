const HomeModel = require('../model/HomeModel')

HomeModel.create({
    titulo: 'Curso de TS',
    descricao: 'Curso de typescript avançado'
})
    .then(dados => console.log('Dados salvos:', dados))
    .catch(erro => console.error('Erro ao salvar dados:', erro))

exports.paginainicial = (req, res) => {
    res.render('index')
}