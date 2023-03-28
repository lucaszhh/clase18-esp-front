import { NextApiRequest, NextApiResponse } from "next"
import { students } from "../db"
import {IStudents} from "../../../types"

const handler = async (req : NextApiRequest, res : NextApiResponse<{message:string}>) => {
    const { method } = req;
    if (method === "POST") {
     const body = JSON.parse(req.body);
     res.status(200).json(body);
    };
}