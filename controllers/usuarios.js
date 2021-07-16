const { request, response } = require('express');


const getUsuarios = (req = request, res = response) => {
    
    const {q, nombre = 'no name', limit, page = 1} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        limit,
        page
    })
};

const putUsuarios = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador'
    })
};

const postUsuarios = (req, res = response) => {

    const { id, nombre } = req.body;

    res.json({
        msg: 'post API - controlador',
        id,
        nombre
    })
};

const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
};



module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios
}