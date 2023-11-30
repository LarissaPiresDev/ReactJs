import './cabecalho.css'

function Cabecalho() {
    return (
        <>
            <header class="cabecalho">
                <h1 class="logo">
                    <a href="./projetoLojaObama/index.html" title="Loja de Informática do Obama">Loja de Informática do
                        Obama</a>
                </h1>
                
                <form action="" method="post">
                    <input type="search" name="busca" id="busca" placeholder="Faça sua busca aqui!" />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </header>
        </>
    )
}
export default Cabecalho