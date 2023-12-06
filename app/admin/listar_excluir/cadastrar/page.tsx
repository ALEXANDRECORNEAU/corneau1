import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate =0

export default function NewCourse({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveCourse(formData: FormData){
        "use server"
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        await sql`INSERT INTO courses (title, description,url) VALUES(${title}, ${description}, ${urlImage})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className=" text-center text-4xl">Cadastrar Impressora</h1>
            <form>
                <Input type="text" name="title" placeholder="Digite o marca da impressora"/><br/>
                <Input type="text" name="description" placeholder="Digite modelo da impressora"/> <br/>
                <br/>
           
                <Button formAction={saveCourse} className="text-white">Salvar</Button>
            </form>
        </div>

    )
}