export default function Register() {
    
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center ">
          <form method="POST" action="/api/auth/signup" className="flex flex-col ">
            <input name="name" type="text" placeholder="이름" className="border border-black mb-2"/> 
            <input name="email" type="text" placeholder="이메일"className="border border-black mb-2" />
            <input name="password" type="password" placeholder="비번" className="border border-black mb-2"/>
            <button type="submit">id/pw 가입요청</button>
          </form>
      </div>
    )
  }