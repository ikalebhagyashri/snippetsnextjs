
import {db} from '@/app/db';
import { redirect } from 'next/navigation';
export default function SnippetCreatePage()
{

    async function createSnippet(formData:FormData){
      //server action
      'use server';
       const title=formData.get('title') as string;
       const code=formData.get('code') as string;
    
      const snippet= await db.snippet.create({
        data:{
            title,
            code
        }
       });

       console.log(snippet);
       redirect('/');
    }
  
    return (
        <form action={createSnippet}>
            <h3 className="font-bold m-3"> Create a Snippet</h3>
             
             <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input name="title"
                      className="border rounded p-2 w-full"
                      id="title"/>
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <input name="code"
                      className="border rounded p-2 w-full"
                      id="code"/>
                </div>
                <button className="bg-blue-500 text-white rounded p-2">Create</button>
             </div>
        </form>
    )
}
