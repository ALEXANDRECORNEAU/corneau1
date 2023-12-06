import { Button } from "@/components/ui/button";
import { Bars4Icon, HomeIcon, ListBulletIcon, NewspaperIcon } from "@heroicons/react/24/outline";

export default function cadastrar() {
    return (
        <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4 className="text-center">Impressoras</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="cadastrar">
                    Cadastrar Impressoras &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="listagem">
                    Listar Impressoras &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="exluir">
                    Excluir &nbsp;
                </a>
            </nav>
        </header>
    )




}