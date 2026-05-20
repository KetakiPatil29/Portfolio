import { site } from '../data/portfolio'

export default function Hero() {
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section id="home" className="hero-section">
            <div className="hero-section__grid">
                <div className="hero-section__content">
                    <p className="hero-section__greeting">Hi, I'm</p>
                    <h1 className="hero-section__name">{site.name}</h1>
                    <h2 className="hero-section__role">{site.role}</h2>
                    <p className="hero-section__tagline">{site.tagline}</p>
                    <div className="hero-section__actions">
                        <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
                            View my work
                        </button>
                        <a
                            href={site.resumeUrl}
                            className="btn btn--outline"
                            target="_blank"
                            rel="noreferrer"
                            //download="Ketaki_Patil_Resume.pdf"
                        >
                            Download resume
                        </a>
                    </div>
                </div>

                <div className="hero-section__photo-wrap">
                    <img
                        src={site.photo}
                        alt={`${site.name} portrait`}
                        className="hero-section__photo"
                        width={320}
                        height={320}
                    />
                </div>
            </div>
        </section>
    )
}