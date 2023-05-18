'use client';

import Link from "next/link";
export default function Delete({result}){
    return(
        <div>
        {result != undefined ? result.map((v, i) => {
            return (
              <div className='border-2 border-orange-400 bg-orange-300 w-40 text-center mb-1 font-semibold py-2' key={i}>
                <p >제 목 : {result[i].title}</p>
                <Link href={`/detail/${result[i]._id}`}><button className='mr-2'>상세: 👀</button></Link>
                <button onClick={(e)=>{
                    fetch('./api/post/delete', 
                    {method :'POST', 
                    body : result[i]._id.toString()
                    }).then(()=>{ 
                        e.target.parentElement.style.display='none';
                    });
                }}>삭제: 🗑️</button>
              </div>
            );
          }) : null 
          }
        </div>
    )
}
