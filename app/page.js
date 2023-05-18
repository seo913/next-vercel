import { connectDB } from '@/util/database';
import Delete from './delete/page';
export const dynamic = 'force-dynamic';

// export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  // console.log(result);

  // await fetch('/URL')
  return (
    <>
      <div className='min-h-screen flex flex-col items-center'>
        <div className='mt-5 text-2xl font-bold mb-10'>Super Developer Board 💻</div>
        <Delete result={result}/>
      </div>
    </>
  );
}
