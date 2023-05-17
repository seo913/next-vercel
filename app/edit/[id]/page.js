import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id) })
    return(
        <>
        <div className="min-h-screen flex flex-col justify-center items-center ">
        <div className="text-2xl font-bold">글 수 정 하 기</div>
        <div className="bg-red-300 w-2/3 h-80 p-1 text-center text-white">
            <form action="/api/post/update" method = "POST">
            <p className="mt-2 mb-3 font-bold text-xl">제목: 
            <input type="text" className="border-2 w-2/3 text-black " 
            name="title"
            defaultValue={result.title}
            // value={titlevalue}
            // onChange={titleChange}
            /></p>
            <span className="flex justify-center items-center" >내용:  
            <textarea type="text" className="border-2 w-2/3 h-48 ml-2 text-black resize-none" 
            name="content"
            // defaultValue={result.content}
            // value={contentvalue}
            // onChange={contentChange}
            /></span>
            <input type="text" name="_id" defaultValue={result._id} className="text-black hidden"/>
            <button 
            // onClick={handleSubmit}
            type="submit" 
            className="border bg-red-600 rounded-xl p-2 mt-2" >수정</button>
            </form>
        </div>
        </div>
        </>
    )
}