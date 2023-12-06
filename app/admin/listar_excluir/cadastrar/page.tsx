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
        const Marca = formData.get("Marca") as string;
        const modelo = formData.get("modelo") as string;
        await sql`INSERT INTO impressora (Marca, modelo) VALUES(${Marca}, ${modelo})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className=" text-center text-4xl">Cadastrar Impressora</h1>
            <form>
                <Input type="text" name="Marca" placeholder="Digite o marca da impressora"/><br/>
                <Input type="text" name="modelo" placeholder="Digite modelo da impressora"/> <br/>
                <br/>
           
                <Button formAction={saveCourse} className="text-white">Salvar</Button>
            </form>
        </div>

    )
}