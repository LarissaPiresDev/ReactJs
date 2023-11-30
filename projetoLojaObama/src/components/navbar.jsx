import "./navbar.css";

function Navbar() {
    return (
        <>

            <nav class="menu">
                <ul>
                    <li><a href="index19.html">Home</a></li>
                    <li><a href="produtos.html">Produtos</a></li>
                    <li><a href="servicos.html">Serviços</a></li>
                    <li><a href="contatos.html">Contatos</a></li>
                </ul>
                <div class="social-icons">
                    <a href="http://"> <i class="fa-brands fa-facebook"></i></a>
                    <a href="http://"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="http://"><i class="fa-brands fa-google"></i></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar