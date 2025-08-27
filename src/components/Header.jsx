import './Header.css'

export const Header = () => {
    return (
        <>
            <header className='header'>
               <div className="logo">Minha Empresa</div>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}