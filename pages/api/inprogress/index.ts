import { NextApiRequest, NextApiResponse } from "next"
import { students } from "../db"
import {IStudents} from "../../../types"

const handler = async (req : NextApiRequest, res : NextApiResponse<IStudents[]|{message:string}>) => {
    const inProgres: IStudents[] = students.filter((student)=>{
        if(parseInt(student.calificaciones.PrimerCuatr)< 6 || parseInt(student.calificaciones.SegundoCuatr)< 6){
            return student;
        }
    })
	if(!inProgres){
		res.status(403).json({message: "No se encontraron estudiantes con nota menor a 6"})
	}
	res.status(200).json(inProgres)
}
export default handler