import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Update(req,res){
    if(req.method === 'POST'){
        let session = await getServerSession(req,res, authOptions);

        const db = (await connectDB).db('forum');
        let result1 = await db.collection('post').findOne({_id : new ObjectId(req.body._id)})
        
        if(result1.author === session.user.email){
            let ch = {
                title : req.body.title, 
                content : req.body.content
            };
            let result = await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)}, 
            {$set : ch});
            return res.status(200).redirect(302,'/');
        }else{
            return res.status(500).json('아이디정보가 같지 않습니다.');
        }
        // if(req.body === ''){
        //     res.status(500).json('제목입력');
        // }
        
    }
}