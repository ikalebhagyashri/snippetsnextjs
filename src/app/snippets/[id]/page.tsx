import { db } from "@/app/db";
import { notFound } from "next/navigation";
import Link from "next/link";
interface SnippetShowPageProps {
    params: Promise<{
      id: string;
    }>;
  }
  

export default async function SnippetShowPage(props:SnippetShowPageProps)
{

    const { id } = await props.params;
 
    const snippet = await db.snippet.findFirst({
      where: { id: parseInt(id) },
    });

    console.log(snippet);

    if(!snippet)
    {
        return notFound();
    }
    return (
        <div>
            <div className="flx m-4 justify-between items-rounded">
            <h1 className="text-xl font-bold">{snippet.title}</h1> 
            
            <div className="flex gap-4">
                <Link href={`/snippets/${snippet.id}/edit`} className="bg-blue-500 text-white rounded p-2">Edit</Link>
                <button className="bg-red-500 text-white rounded p-2">Delete</button>
            </div>
            </div>
           <pre className="p-3 border rounded">
            <code>{snippet.code}</code>
           </pre>
           
           </div>
    )

}