import { connectDB } from '@/util/database';
import Link from 'next/link';
import Delete from './delete/page';

export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  // console.log(result);
  return (
    <>
      <div className='min-h-screen flex flex-col items-center'>
        <div className='mt-5 text-2xl font-bold mb-10'>Super Developer Board 💻</div>
        <Delete result={result}/>
      </div>
    </>
  );
}
