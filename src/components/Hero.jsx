export const Hero = () => {
    // Titulo forte e objetivo transmitindo a essência do site
    //subtitulo opcional, explicar rapidamente o diferencial
    //Imagem ou ilustração relevante ao conteudo do site.
    //bota do chamado para ação (cta = call to action )
    // (call to action) para incentivar o usuario a explorar
    return (
       <section className="hero">
        <div className="hero__container">
            <div className="hero__content">
                <span className="hero__eyebrow"></span>
                <h1 className="hero__title"></h1>
                <p className="hero__subtitle"></p>
                <div className="hero__actions">
                    <a href="" className="btn btn--primary"></a>
                    <a href="" className="btn btn--ghost"></a>
                    <div className="hero__social-proof">
                        <div className="hero__avatars">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            </div>
                        <span></span>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__mock"></div>
                </div>
            </div>
        </div>
       </section>
    )
}
