import {db} from '@/app/db'
import Link from 'next/link';
export default async function Home() {
// await new Promise((resolve)=>setTimeout(resolve,10000));

const snippets=await db.snippet.findMany();

const renderedSnippets=snippets.map((snippet)=>(
  <Link key={snippet.id} href={`/snippets/${snippet.id}`} className="flex justify-between items-center p-2 border rounded">
    <div>{snippet.title}</div>
    <div>View</div>
  </Link>
))

  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link href='/snippets/new' className='bg-blue-500 text-white rounded p-2'>Create</Link>
      </div>
   <div className='flex flex-col gap-2'>
    {renderedSnippets}
   </div>
   </div>
  );
}
