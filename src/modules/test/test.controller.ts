import { Request, Response } from 'express';


export default {
    async getTest(req:Request, res:Response) {
        const { name } = req.query;
        res.status(200).json({
            message: `Hello nice to meet you again, ${name}!`,
        });
    }
}