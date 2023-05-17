import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Update(req,res){
    if(req.method === 'POST'){
        // if(req.body === ''){
        //     res.status(500).json('제목입력');
        // }
        let ch = {
            title : req.body.title, 
            content : req.body.content
        };
        const db = (await connectDB).db('forum');
        let result = await db.collection('post').updateOne(
        {_id : new ObjectId(req.body._id)}, 
        {$set : ch});
        return res.status(200).redirect(302,'/');
    }
}