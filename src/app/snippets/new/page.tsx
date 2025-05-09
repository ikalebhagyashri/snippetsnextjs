'use client';
import { useActionState } from 'react';
import * as actions from '@/actions/actions';
export default function SnippetCreatePage()
{

    const [formState,action]=useActionState(actions.createSnippet,{message:''})
  
    return (
        <form action={action}>
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
              {formState.message? <div className='my-2 p-2 '>
                    {formState.message}
                </div>:null }
                <button className="bg-blue-500 text-white rounded p-2">Create</button>
             </div>
        </form>
    )
}
