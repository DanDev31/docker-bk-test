import db from '@/db';
import { user } from '@/db/schema';
import { Request, Response } from 'express';


export default {
    async getUsers(req:Request, res:Response){
        try {
            const result = await db.select().from(user);
  res.json(result);
        } catch (error) {
            console.log('error getting users', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async createUser(req:Request, res:Response){
        try {
            const result = await db.select().from(user);
  res.json(result);
        } catch (error) {
            console.log('error getting users', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

}