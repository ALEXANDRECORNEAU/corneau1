export default function Header() {
    return (
        <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4>Impressora</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="admin/listar_excluir/cadastrar">
                    Cadastrar Impressora &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#admin/listar_excluir/cadastrar">
                    Listagem &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#contato">
                    Exlusão &nbsp;{" "}
                </a>
                
            </nav>
        </header>
    )
}