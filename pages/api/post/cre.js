import { connectDB } from "@/util/database";

export default async function Cre(req,res){
    // console.log(req.body);
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