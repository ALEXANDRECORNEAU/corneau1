import { Button } from "@/components/ui/button";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCourse() {
    async function deleteCourse(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from impressora where id=${id}`
        revalidatePath("/admin/course")
    }
    const { rows } = await sql`SELECT * from impressora`;
    return (
        <div>
            <h1 className="text-center ">Lista de Impressora</h1>

            <table>
                <thead>
                    <tr> <td>Marca</td> <td>Modelo</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((course) => {
                            return (
                                <tr key={course.id}><td>{course.marca}</td> <td>{course.modelo}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={course.id}/>   
                                    <Button variant= "destructive"
                                     formAction={deleteCourse}>Excluir</Button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}