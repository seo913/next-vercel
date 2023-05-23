
'use client'
import Link from "next/link";
export default function List({result}){
    return(
        <div>
        {result != undefined ? result.map((v, i) => {
            return (
            <div className='border-2 border-orange-400 bg-orange-300 w-60 text-center mb-1 font-semibold py-2' key={i}>
                <p >제 목 : {result[i].title}</p>
                <p>작성자 : {result[i].author}</p>
                <Link href={`/detail/${result[i]._id}`}><button className='mr-2'>상세: 👀</button></Link>
                {/* <Delete result={result} /> */}
                <button onClick={(e) => {
                fetch('./api/post/delete', {
                    method: 'POST',
                    body: result[i]._id.toString(),
                })
                    .then((response) => response.json())
                    .then((data) => {
                    if (data.authorized) {
                        // 작성자인 경우 삭제 처리
                        e.target.parentElement.style.display = 'none';
                    } else {
                        // 작성자가 아닌 경우에만 경고창 표시
                        alert('작성자만 삭제할 수 있습니다.');
                    }
                    });
                }}>삭제: 🗑️</button>
                </div>
            );
            }) : null 
            }
        </div>
    );
}
