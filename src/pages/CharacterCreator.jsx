"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from '../styles/CharacterCreator.module.scss'


const CharacterCreator = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [character, setCharacter] = useState({
    name: "",
    nickname: "",
    profession: "influencer",
    controversyLevel: 50,
    personalityTraits: [],
    backstory: "",
    interests: [],
  })

  const professions = [
    { value: "influencer", label: "Influencer", icon: "📱" },
    { value: "musician", label: "Muzyk", icon: "🎵" },
    { value: "actor", label: "Aktor", icon: "🎬" },
    { value: "reality_star", label: "Gwiazda reality show", icon: "📺" },
    { value: "youtuber", label: "YouTuber", icon: "🎥" },
    { value: "artist", label: "Artysta", icon: "🎨" },
    { value: "athlete", label: "Sportowiec", icon: "🏆" },
    { value: "entrepreneur", label: "Przedsiębiorca", icon: "💰" },
  ]

  const personalityTraits = [
    "Narcystyczny",
    "Charyzmatyczny",
    "Kontrowersyjny",
    "Ekscentryczny",
    "Tajemniczy",
    "Skandaliczny",
    "Dramatyczny",
    "Prowokacyjny",
    "Filantropijny",
    "Impulsywny",
    "Wyrachowany",
    "Emocjonalny",
  ]

  const interests = [
    "Luksusowe podróże",
    "Moda",
    "Ekologia",
    "Technologia",
    "Sztuka",
    "Polityka",
    "Fitness",
    "Kulinaria",
    "Zwierzęta",
    "Motoryzacja",
    "Inwestycje",
    "Imprezy",
    "Joga",
    "Duchowość",
  ]

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCharacter({ ...character, [name]: value })
  }

  const handleSliderChange = (e) => {
    setCharacter({ ...character, controversyLevel: Number.parseInt(e.target.value) })
  }

  const togglePersonalityTrait = (trait) => {
    if (character.personalityTraits.includes(trait)) {
      setCharacter({
        ...character,
        personalityTraits: character.personalityTraits.filter((t) => t !== trait),
      })
    } else if (character.personalityTraits.length < 5) {
      setCharacter({
        ...character,
        personalityTraits: [...character.personalityTraits, trait],
      })
    }
  }

  const toggleInterest = (interest) => {
    if (character.interests.includes(interest)) {
      setCharacter({
        ...character,
        interests: character.interests.filter((i) => i !== interest),
      })
    } else if (character.interests.length < 5) {
      setCharacter({
        ...character,
        interests: [...character.interests, interest],
      })
    }
  }

  const handleSubmit = () => {
    // Here you would typically save the character to a database
    console.log("Character created:", character)
    navigate("/dashboard")
  }

  return (
    <div className={styles.creatorPage}>
      <div className="container">
        <Link to="/" className={styles.backLink}>
          ← Powrót do strony głównej
        </Link>

        <div className={styles.creatorCard}>
          <h1 className={styles.creatorTitle}>Stwórz swoją celebrycką personę</h1>

          {/* Progress Steps */}
          <div className={styles.progressSteps}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${(step - 1) * 50}%` }}></div>
            </div>
            {[1, 2, 3].map((s) => (
              <div key={s} className={`${styles.stepCircle} ${s <= step ? styles.active : ""}`}>
                {s}
              </div>
            ))}
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Podstawowe informacje</h2>

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="name"
                  value={character.name}
                  onChange={handleChange}
                  placeholder="Np. Anna Nowak"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="nickname" className={styles.label}>
                  Pseudonim/Nazwa artystyczna
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  value={character.nickname}
                  onChange={handleChange}
                  placeholder="Np. Queen Anna, AnnaGlam"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Profesja</label>
                <div className={styles.professionGrid}>
                  {professions.map((profession) => (
                    <div
                      key={profession.value}
                      onClick={() => setCharacter({ ...character, profession: profession.value })}
                      className={`${styles.professionCard} ${
                        character.profession === profession.value ? styles.active : ""
                      }`}
                    >
                      <div className={styles.professionIcon}>{profession.icon}</div>
                      <span className={styles.professionLabel}>{profession.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.stepActions}>
                <button onClick={handleNextStep} className="btn btn-primary">
                  Dalej →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personality */}
          {step === 2 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Osobowość i wizerunek</h2>

              <div className={styles.formGroup}>
                <label className={styles.label}>Poziom kontrowersyjności</label>
                <div className={styles.sliderContainer}>
                  <span className={styles.sliderLabel}>Spokojny</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={character.controversyLevel}
                    onChange={handleSliderChange}
                    className={styles.slider}
                  />
                  <span className={styles.sliderLabel}>Skandalista</span>
                </div>
                <div className={styles.sliderValue}>
                  <span className={styles.badge}>
                    {character.controversyLevel < 30
                      ? "Grzeczny wizerunek"
                      : character.controversyLevel < 70
                        ? "Umiarkowanie kontrowersyjny"
                        : "Bardzo skandaliczny"}
                  </span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Cechy osobowości (wybierz max. 5)</label>
                <div className={styles.traitsContainer}>
                  {personalityTraits.map((trait) => (
                    <span
                      key={trait}
                      onClick={() => togglePersonalityTrait(trait)}
                      className={`${styles.traitBadge} ${
                        character.personalityTraits.includes(trait) ? styles.active : ""
                      }`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="backstory" className={styles.label}>
                  Historia/Backstory
                </label>
                <textarea
                  id="backstory"
                  name="backstory"
                  value={character.backstory}
                  onChange={handleChange}
                  placeholder="Opisz historię swojej postaci, skąd pochodzi, jak zdobyła sławę..."
                  className={styles.textarea}
                ></textarea>
              </div>

              <div className={styles.stepActions}>
                <button onClick={handlePrevStep} className="btn btn-outline">
                  ← Wstecz
                </button>
                <button onClick={handleNextStep} className="btn btn-primary">
                  Dalej →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Interests & Preview */}
          {step === 3 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Zainteresowania i podsumowanie</h2>

              <div className={styles.formGroup}>
                <label className={styles.label}>Zainteresowania (wybierz max. 5)</label>
                <div className={styles.traitsContainer}>
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`${styles.traitBadge} ${character.interests.includes(interest) ? styles.active : ""}`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.previewSection}>
                <h3 className={styles.previewTitle}>Podgląd twojej postaci</h3>

                <div className={styles.characterPreview}>
                  <div className={styles.characterAvatar}>{character.name ? character.name.charAt(0) : "?"}</div>

                  <div className={styles.characterInfo}>
                    <div className={styles.characterName}>
                      <h4>{character.name || "Imię i nazwisko"}</h4>
                      {character.controversyLevel > 70 && <span className={styles.flameIcon}>🔥</span>}
                      {character.profession === "influencer" && <span className={styles.crownIcon}>👑</span>}
                    </div>

                    <p className={styles.characterNickname}>@{character.nickname || "pseudonim"}</p>

                    <div className={styles.characterTraits}>
                      {character.personalityTraits.map((trait) => (
                        <span key={trait} className={styles.traitTag}>
                          {trait}
                        </span>
                      ))}
                    </div>

                    <p className={styles.characterBackstory}>
                      {character.backstory || "Tutaj pojawi się historia twojej postaci..."}
                    </p>

                    <div className={styles.characterInterests}>
                      <span className={styles.heartIcon}>❤️</span>
                      <span className={styles.interestsLabel}>Interesuje się:</span>
                      <span className={styles.interestsList}>
                        {character.interests.join(", ") || "brak wybranych zainteresowań"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.stepActions}>
                <button onClick={handlePrevStep} className="btn btn-outline">
                  ← Wstecz
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary"
                  disabled={!character.name || !character.nickname}
                >
                  💾 Zapisz i rozpocznij
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterCreator
