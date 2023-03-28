import { NextApiRequest, NextApiResponse } from "next"
import { students } from "../db"
import {IStudents} from "../../../types"

const handler = async (req : NextApiRequest, res : NextApiResponse<IStudents[]|{message:string}>) => {
	if(!students){
		res.status(403).json({message: "No se encontraron estudiantes"})
	}
	res.status(200).json(students)
}
export default handler