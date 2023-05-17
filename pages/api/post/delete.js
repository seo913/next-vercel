import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Delete(req,res){
    if(req.method === 'POST'){
        const db = (await connectDB).db('forum');
        let result = await db.collection('post').deleteOne({_id:new ObjectId(req.body) });
        return res.status(200).redirect(302,'/');
    }
}