const { query } = require("express");
const pool = require("../utils/BD");
const TABLA_ALUMNOS = "alumnos";
const TABLA_CARRERAS = "carreras";
const ALUMNO_MATERIAS = "alumno_materia";
const MATERIAS = "materias";


const get = async()=>{
    try{
        const query = "SELECT user.* FROM ?? AS user";
        const params = [TABLA_ALUMNOS];
        return await pool.query(query, params);
    }catch(e){
        console.log(e);
    }
}


const single = async(matri)=>{
   try{
    const query = "SELECT A.*, C.carrera FROM ?? AS A JOIN ?? AS C ON C.nro_carrera = A.no_carrera AND A.matricula = ?";
    const params = [TABLA_ALUMNOS, TABLA_CARRERAS, matri];
    return await pool.query(query, params);
   }catch(e){
       console.log(e)
   }
    
}
const materias = async(matri)=>{
    try{
        const query = "SELECT M.materia FROM ?? AS M JOIN ?? AS AM ON M.nro_materia = AM.n_materia AND AM.matricula = ?"
        const params = [MATERIAS, ALUMNO_MATERIAS, matri];
        return await pool.query(query, params);
    }catch(e){
        console.log(e);
    }

}

module.exports = {get, single, materias};