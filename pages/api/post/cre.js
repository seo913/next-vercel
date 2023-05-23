import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Cre(req,res){
    let session = await getServerSession(req,res,authOptions);
    //  console.log(session.user.email);
    if(session){
        req.body.author = session.user.email
    }
    if(req.method === 'POST'){
        if(req.body.title === ''){
            res.status(500).json('제목을 입력');
        }else{
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').insertOne(req.body);
            res.status(200).redirect(302,'/');
        }
    }
    
}