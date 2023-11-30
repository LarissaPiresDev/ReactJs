import './newsletter.css'
import { useState } from 'react'

function Rodape() {
    const [count, setCount] = useState(0)
    return (
        <section class="newsletter">
            <h3>Newsletter</h3>
            <p>Receba nossas informações por email.</p>
            <form action="" method="post">
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu email" />
                <button i class="cadastro">Cadastrar</button>
            </form>
            <div className="card">
                <button className='contadora' onClick={() => setCount((count) => count + 1)}>
                    Registre sua visita ! {count}
                </button>
            </div>
        </section>
    )
}

export default Rodape

