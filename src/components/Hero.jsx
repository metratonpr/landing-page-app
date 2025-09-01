import './Hero.css';
export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <span className="hero__eyebrow">NOVIDADES + LANÇAMENTOS</span>
                    <h1 className="hero__title">
                        Transforme visitantes em clientes com uma landing page incrivel.
                    </h1>
                    <p className="hero__subtitle">Texto claro, visual profissional e CTA direto.</p>
                    <div className="hero__actions">
                        <a href="" className="btn btn--primary">Comece agora!</a>
                        <a href="" className="btn btn--ghost">Ver Desmonstrações</a>
                    </div>
                    <div className="hero__social-proof">
                        <div class="hero__avatars">
                            <img src="https://i.pravatar.cc/56?img=12" alt="Cliente 1" />
                            <img src="https://i.pravatar.cc/56?img=5" alt="Cliente 2" />
                            <img src="https://i.pravatar.cc/56?img=33" alt="Cliente 3" />
                            <img src="https://i.pravatar.cc/56?img=18" alt="Cliente 4" />
                        </div>
                        <span>3 bilhoes de criadores confiam neste modelo</span>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__mock"></div>
                </div>
            </div>       
        </section >
    )
}
