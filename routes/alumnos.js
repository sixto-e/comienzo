var express = require('express');
var router = express.Router();
const {get, single, materias} = require('../models/consultas');

const getAlumnos = async(req, res)=>{
    const alumnos = await get();
    res.render("alumnos", {alumnos});
}
const Alumnosingle = async(req,res)=>{
    const matri = req.params.matricula;
    const aluSingle = await single(matri);
    const Amaterias = await materias(matri)
    console.log("materias:", Amaterias);
    console.log(aluSingle);
    res.render("single", {aluSingle, Amaterias});

}
router.get('/', getAlumnos);
router.get('/single/:matricula', Alumnosingle);

module.exports = router;