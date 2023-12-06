export default function Header() {
    return (
        <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4 className="text-center">Impressoras</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="cadastras">
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