'use client'

import { useState } from "react";

export default function Create(){
     const [titlevalue, setTitleValue] = useState("");
     const [contentvalue, setContentValue] = useState("");

  const titleChange = (event) => {
    setTitleValue(event.target.value);
  };
  const contentChange = (event) => {
    setContentValue(event.target.value);
  };

  const handleSubmit = (event) => {

    if (titlevalue === "") {
        event.preventDefault();
      alert("제목을 입력해주세요!");
    }if(contentvalue === ""){
        event.preventDefault();
        alert("내용을 입력해주세요!");
    }
};
    return(
        <>
        <div className="min-h-screen flex flex-col justify-center items-center ">
        <div className="text-2xl font-bold">글 작 성 하 기</div>
        <div className="bg-blue-300 w-2/3 h-80 p-1 text-center text-white">
            <form action="./api/post/cre" method = "POST">
            <p className="mt-2 mb-3 font-bold text-xl">제목: 
            <input type="text" className="border-2 w-2/3 text-black " 
            name="title"
            value={titlevalue}
            onChange={titleChange}
            /></p>
            <span className="flex justify-center items-center" >내용:  
            <textarea type="text" className="border-2 w-2/3 h-48 ml-2 text-black resize-none" 
            name="content"
            value={contentvalue}
            onChange={contentChange}
            /></span>
            <button 
            onClick={handleSubmit}
            type="submit" 
            className="border bg-blue-600 rounded-xl p-2 mt-2" >글작성</button>
            </form>
        </div>
        </div>
        </>
    )
}