"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import styles from '../styles/Dashboard.module.scss'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("feed")

  
  const celebrity = {
    name: "Anna Glamour",
    nickname: "@AnnaGlam",
    profession: "Influencer",
    followers: "1.2M",
    controversyLevel: 75,
    personalityTraits: ["Narcystyczny", "Kontrowersyjny", "Dramatyczny"],
    interests: ["Moda", "Luksusowe podróże", "Imprezy"],
    stats: {
      articles: 24,
      comments: 1458,
      likes: 45600,
      shares: 12300,
    },
  }

  
  const gossipArticles = [
    {
      id: 1,
      title: "Anna Glamour przyłapana na tajemniczym spotkaniu z miliarderem!",
      source: "CelebrityNews",
      date: "2 godziny temu",
      image: "/placeholder.svg?height=200&width=400",
      likes: 342,
      comments: 56,
      shares: 23,
    },
    {
      id: 2,
      title: "Skandal na gali! Anna Glamour wyszła w tej samej sukience co jej rywalka!",
      source: "PlotkaPortal",
      date: "wczoraj",
      image: "/placeholder.svg?height=200&width=400",
      likes: 567,
      comments: 128,
      shares: 45,
    },
    {
      id: 3,
      title: "SZOK! Anna Glamour zdradziła sekret swojej urody - fani w niedowierzaniu!",
      source: "GwiazdyOnline",
      date: "3 dni temu",
      image: "/placeholder.svg?height=200&width=400",
      likes: 1203,
      comments: 234,
      shares: 89,
    },
  ]

 
  const socialComments = [
    {
      id: 1,
      user: "FanAnny123",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "OMG! Jesteś najlepsza! Kocham twój styl! 😍😍😍",
      likes: 45,
      time: "1 godzinę temu",
    },
    {
      id: 2,
      user: "HejterGwiazd",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "Kolejna sztuczna celebrytka bez talentu... 🙄",
      likes: 23,
      time: "3 godziny temu",
    },
    {
      id: 3,
      user: "ModaExpert",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "Ta stylizacja to absolutny hit sezonu! Gdzie kupiłaś tę torebkę?",
      likes: 67,
      time: "5 godzin temu",
    },
    {
      id: 4,
      user: "PaparazziHunter",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "Widziałem cię wczoraj w restauracji Luxe z tajemniczym mężczyzną... Kto to był? 👀",
      likes: 89,
      time: "wczoraj",
    },
    {
      id: 5,
      user: "TrueFan2000",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "Ignoruj hejterów! Jesteś wspaniała i inspirująca! ❤️",
      likes: 112,
      time: "wczoraj",
    },
  ]

  return (
    <div className={styles.dashboardPage}>
      
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <Link to="/">
                <h1 className={styles.logoText}>Plotkarnia 3000</h1>
              </Link>
            </div>

            <div className={styles.headerActions}>
              <button className={styles.notificationButton}>🔔</button>

              <div className={styles.userMenu}>
                <div className={styles.userAvatar}>
                  <img src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                </div>
                <span className={styles.userName}>Anna Glamour</span>
                <span className={styles.dropdownIcon}>▼</span>

                
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.dashboardGrid}>
            
            <div className={styles.sidebar}>
              <div className={styles.profileCard}>
                <div className={styles.profileHeader}>
                  <div className={styles.profileAvatar}>
                    <div className={styles.avatarFallback}>AG</div>
                  </div>
                  <h2 className={styles.profileName}>{celebrity.name}</h2>
                  <p className={styles.profileNickname}>
                    {celebrity.nickname} • {celebrity.profession}
                  </p>
                </div>

                <div className={styles.profileContent}>
                  <div className={styles.profileTraits}>
                    {celebrity.personalityTraits.map((trait) => (
                      <span key={trait} className={styles.traitBadge}>
                        {trait}
                      </span>
                    ))}
                  </div>

                  <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                      <p className={styles.statLabel}>Artykuły</p>
                      <p className={styles.statValue}>{celebrity.stats.articles}</p>
                    </div>
                    <div className={styles.statItem}>
                      <p className={styles.statLabel}>Komentarze</p>
                      <p className={styles.statValue}>{celebrity.stats.comments}</p>
                    </div>
                    <div className={styles.statItem}>
                      <p className={styles.statLabel}>Polubienia</p>
                      <p className={styles.statValue}>{celebrity.stats.likes}</p>
                    </div>
                  </div>

                  <div className={styles.profileDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>🔥</span>
                      <span>Poziom kontrowersji: {celebrity.controversyLevel}%</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>❤️</span>
                      <span>Obserwujący: {celebrity.followers}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>🏆</span>
                      <span>Ranking: #12 w kategorii {celebrity.profession}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.profileFooter}>
                  <button className="btn btn-primary">Generuj nową plotkę</button>
                </div>
              </div>
            </div>

            
            <div className={styles.content}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tabButton} ${activeTab === "feed" ? styles.active : ""}`}
                  onClick={() => setActiveTab("feed")}
                >
                  📰 Plotki
                </button>
                <button
                  className={`${styles.tabButton} ${activeTab === "social" ? styles.active : ""}`}
                  onClick={() => setActiveTab("social")}
                >
                  💬 Komentarze
                </button>
                <button
                  className={`${styles.tabButton} ${activeTab === "stats" ? styles.active : ""}`}
                  onClick={() => setActiveTab("stats")}
                >
                  📊 Statystyki
                </button>
              </div>

              
              {activeTab === "feed" && (
                <div className={styles.tabContent}>
                  {gossipArticles.map((article) => (
                    <div key={article.id} className={styles.articleCard}>
                      <div className={styles.articleImage}>
                        <img src={article.image || "/placeholder.svg"} alt={article.title} />
                        <span className={styles.articleSource}>{article.source}</span>
                      </div>
                      <div className={styles.articleHeader}>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                        <p className={styles.articleDate}>{article.date}</p>
                      </div>
                      <div className={styles.articleFooter}>
                        <div className={styles.articleActions}>
                          <button className={styles.actionButton}>👍 {article.likes}</button>
                          <button className={styles.actionButton}>💬 {article.comments}</button>
                          <button className={styles.actionButton}>🔄 {article.shares}</button>
                        </div>
                        <button className="btn btn-outline">Czytaj więcej</button>
                      </div>
                    </div>
                  ))}

                  <button className={`btn btn-outline ${styles.loadMoreButton}`}>Załaduj więcej plotek</button>
                </div>
              )}

              
              {activeTab === "social" && (
                <div className={styles.tabContent}>
                  {socialComments.map((comment) => (
                    <div key={comment.id} className={styles.commentCard}>
                      <div className={styles.commentHeader}>
                        <div className={styles.commentAvatar}>
                          <img src={comment.avatar || "/placeholder.svg"} alt={comment.user} />
                        </div>
                        <div className={styles.commentMeta}>
                          <p className={styles.commentUser}>{comment.user}</p>
                          <p className={styles.commentTime}>{comment.time}</p>
                        </div>
                      </div>
                      <p className={styles.commentText}>{comment.comment}</p>
                      <div className={styles.commentActions}>
                        <button className={styles.commentAction}>👍 {comment.likes}</button>
                        <button className={styles.commentAction}>💬 Odpowiedz</button>
                      </div>
                    </div>
                  ))}

                  <button className={`btn btn-outline ${styles.loadMoreButton}`}>Załaduj więcej komentarzy</button>
                </div>
              )}

              
              {activeTab === "stats" && (
                <div className={styles.tabContent}>
                  <div className={styles.statsCard}>
                    <div className={styles.statsHeader}>
                      <h3 className={styles.statsTitle}>Statystyki popularności</h3>
                      <p className={styles.statsDescription}>Analiza twojej popularności w ostatnim miesiącu</p>
                    </div>

                    <div className={styles.statsContent}>
                      <div className={styles.chartSection}>
                        <h4 className={styles.chartTitle}>📈 Trend popularności</h4>
                        <div className={styles.chart}>
                          
                          {[30, 45, 25, 60, 40, 80, 65].map((height, i) => (
                            <div key={i} className={styles.chartBar}>
                              <div className={styles.chartBarFill} style={{ height: `${height}%` }}></div>
                            </div>
                          ))}
                        </div>
                        <div className={styles.chartLabels}>
                          <span>1 tydzień temu</span>
                          <span>Teraz</span>
                        </div>
                      </div>

                      <div className={styles.statsHighlights}>
                        <div className={styles.highlightCard}>
                          <h4 className={styles.highlightTitle}>Najlepszy artykuł</h4>
                          <p className={styles.highlightText}>
                            "Anna Glamour przyłapana na tajemniczym spotkaniu z miliarderem!"
                          </p>
                          <div className={styles.highlightStat}>👍 1,203 polubień</div>
                        </div>

                        <div className={styles.highlightCard}>
                          <h4 className={styles.highlightTitle}>Najlepszy komentarz</h4>
                          <p className={styles.highlightText}>"OMG! Jesteś najlepsza! Kocham twój styl! 😍😍😍"</p>
                          <div className={styles.highlightStat}>👍 112 polubień</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      
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

export default Dashboard
