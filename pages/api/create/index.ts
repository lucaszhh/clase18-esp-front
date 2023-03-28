import { NextApiRequest, NextApiResponse } from "next"
import { students } from "../db"
import {IStudents} from "../../../types"

const handler = async (req : NextApiRequest, res : NextApiResponse<{message:string}>) => {
    if (req.method === 'POST') {
        req.body.
    }
}