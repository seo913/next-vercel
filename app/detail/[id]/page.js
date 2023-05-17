import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props){
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)});
    // console.log(props);
    return(
        <>
        <div className="min-h-screen flex flex-col justify-center items-center ">
        <div className="border bg-green-300 w-2/3 h-80 flex flex-col items-center justify-center rounded-xl">
        <div className=" text-xl font-bold mb-3  ">제목 : <span>{result.title}</span></div>
        <div className="border-2 bg-red-200 px-5 w-2/3 h-48 rounded-xl mb-6">
        <p className="text-left font-semibold">내용 : </p>
        <span>{result.content}</span></div>
        </div>
        <div className="flex mt-2">
        <Link href={`/edit/${result._id}`} >
            <button className="bg-red-300 p-2 mr-2 rounded-xl">수정하기</button></Link>
        <Link href='/'><button className="bg-red-300 p-2 rounded-xl">GO BACK</button></Link>
        </div>
        </div>
        </>
    ) 
}