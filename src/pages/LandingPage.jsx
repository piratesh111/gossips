import { Link } from "react-router-dom"
import styles from '../styles/LandingPage.module.scss'
import image from '../1.png'

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>✨</span>
              <h1 className={styles.logoText}>Plotkarnia 3000</h1>
            </div>
            <div className={styles.headerButtons}>
              <button className={`btn btn-ghost ${styles.loginBtn}`}>Zaloguj się</button>
              <button className={`btn btn-primary ${styles.registerBtn}`}>Zarejestruj się</button>
            </div>
          </div>
        </div>
      </header>

      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Wymyśl świat, w którym jesteś celebrytą – i daj się obgadać!</h1>
            <p className={styles.heroDescription}>
              Stwórz fikcyjną wersję siebie jako celebrytę, influencera czy gwiazdę, a następnie zobacz jak AI generuje
              o Tobie plotki, komentarze i dramę!
            </p>
            <Link to="/creator" className={styles.heroButton}>
              <button className="btn btn-primary btn-lg">
                Stwórz swoją postać <span className={styles.arrowIcon}>→</span>
              </button>
            </Link>
          </div>

          
          <div className={styles.mockScreenshot}>
            <div className={styles.screenshotContainer}>
              <img src={image} alt="Plotkarnia 3000 Interface" />
            </div>
            <div className={styles.commentBubble}>
              <p>"OMG! Czy to prawda, że @CelebFake spotyka się z @StarGossip?! 😱💅"</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.featuresTitle}>Funkcje, które pokochasz</h2>

          <div className={styles.featureGrid}>
            <FeatureCard
              icon="👤"
              title="Kreator postaci"
              description="Wybierz swój publiczny wizerunek, pseudonim, styl bycia i kontrowersje, które Cię definiują."
            />

            <FeatureCard
              icon="💬"
              title="Generatory plotek"
              description="AI tworzy fejkowe artykuły, np. 'Czy X zdradził swojego partnera z Y?', 'X widziany z dziwnym mikrochipem pod skórą!'"
            />

            <FeatureCard
              icon="📱"
              title="Fake social media"
              description="Screeny z komentarzami hejterów, fanów i 'przyjaciół' celebryty."
            />

            <FeatureCard
              icon="✨"
              title="Drama Mode"
              description="Interaktywna symulacja kłótni, przecieków wiadomości i kontrataków PR."
            />

            <FeatureCard
              icon="👥"
              title="Ranking celebrytów"
              description="Inni użytkownicy mogą 'followować' i 'cancelować' Twoją postać – powstaje ranking kontrowersyjnych sław."
            />

            <FeatureCard
              icon="💬"
              title="Personalizacja"
              description="Dostosuj swój świat celebryty, wybierając branżę, styl życia i typowe skandale."
            />
          </div>
        </div>
      </section>

      
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Gotowy, by stać się gwiazdą?</h2>
            <p className={styles.ctaDescription}>
              Dołącz do Plotkarni 3000 już dziś i zobacz, jak wygląda życie w centrum uwagi!
            </p>
            <Link to="/creator">
              <button className="btn btn-primary btn-lg">
                Rozpocznij przygodę <span className={styles.arrowIcon}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Plotkarnia 3000. Wszystkie plotki są fikcyjne.
          </p>
        </div>
      </footer>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  )
}

export default LandingPage
