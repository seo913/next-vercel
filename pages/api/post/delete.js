import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Delete(req,res){

    if (req.method === "POST") {
        try {
            let session = await getServerSession(req, res, authOptions);
            const db = (await connectDB).db("forum");
            const postId = req.body;
        
            const post = await db.collection("post").findOne({
                _id: new ObjectId(postId),
            });
        
            if (!post) {
                return res.status(404).json({ error: "게시물을 찾을 수 없습니다." });
            }
        
            if (post.author === session.user.email) {
                await db.collection("post").deleteOne({ _id: new ObjectId(postId) });
                return res.status(200).json({ authorized: true });
            } else {
                return res.status(403).json({ authorized: false });
            }
            } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "서버 오류가 발생했습니다." });
            }
        }
}