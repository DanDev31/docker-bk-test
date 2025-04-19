import db from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { UserInterface } from "./types";

export const userRepository = {
    async getUser(id: number) {
       return db.select().from(user).where(eq(user.id, id)).limit(1);
    },
    async createUser(newUser:UserInterface){
        return db.insert(user).values(newUser)
    }
   }
