import {Request, Response} from "express";
import {findPersonalInfo} from "../openai/find-personal-info";

export const pi = (req:Request, res:Response) => {
    const {input} = req.query
    if(!input){
        res.status(400).send()
        return
    }
    findPersonalInfo(input as string).then((result) => {
        res.send(result)
    }).catch((error)=>{
        console.error(error)
        res.send(500)
    })
}
