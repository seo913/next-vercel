import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt';

export default async function signup(req,res){
    
    if (req.method === 'POST') {
        if (req.body.password === '') {
          return res.status(500).json('비밀번호를 입력해주세요.');
        }
    
        // 이메일 중복 확인
        let db = (await connectDB).db('forum');
        const existingUser = await db.collection('user_cred').findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(500).json('이미 사용 중인 이메일입니다.');
        }
    
        // 비밀번호 해싱
        let hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
    
        if (req.body.email === '') {
          return res.status(500).json('아이디를 입력해주세요.');
        } else {
          // 회원 정보 데이터베이스에 추가
          const result = db.collection('user_cred').insertOne(req.body);
          return res.status(200).json('성공완료');
        }
      }
}