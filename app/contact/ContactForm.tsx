'use client'

import { useState } from 'react'

interface FormState {
  prenom: string
  nom: string
  email: string
  telephone: string
  message: string
}

const initialState: FormState = {
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.prenom.trim()) newErrors.prenom = 'Prénom requis'
    if (!form.nom.trim()) newErrors.nom = 'Nom requis'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Email invalide'
    if (!form.message.trim()) newErrors.message = 'Message requis'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate network request
    await new Promise((res) => setTimeout(res, 1200))
    setSubmitting(false)
    setSubmitted(true)
    setForm(initialState)
  }

  const inputClasses = (field: keyof FormState) =>
    `w-full font-futura text-sm text-cuir bg-tortilla/50 rounded-xl px-4 py-3
     border-2 outline-none transition-all duration-200 placeholder:text-cuir/30
     focus:bg-white focus:ring-2 focus:ring-flor focus:border-flor
     ${errors[field] ? 'border-rojo ring-1 ring-rojo/40' : 'border-tortilla hover:border-flor/50'}`

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center h-full min-h-[340px]">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg"
          style={{ background: 'linear-gradient(135deg, #19A95B, #FFAB03)' }}
        >
          ✓
        </div>
        <h4 className="font-bernier text-3xl text-cuir">¡Gracias!</h4>
        <p className="font-futura text-cuir/70 text-sm max-w-xs leading-relaxed">
          Votre message a bien été envoyé. Nous vous répondrons très prochainement !
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 font-fjalla text-xs tracking-widest uppercase text-flor
                     border-2 border-flor rounded-full px-5 py-2
                     hover:bg-flor hover:text-white transition-all duration-200"
        >
          Nouveau message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Prénom + Nom */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="font-fjalla text-xs tracking-widest uppercase text-cuir/60">
            Prénom
          </label>
          <input
            type="text"
            name="prenom"
            placeholder="María"
            value={form.prenom}
            onChange={handleChange}
            className={inputClasses('prenom')}
          />
          {errors.prenom && (
            <span className="font-futura text-xs text-rojo">{errors.prenom}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-fjalla text-xs tracking-widest uppercase text-cuir/60">
            Nom
          </label>
          <input
            type="text"
            name="nom"
            placeholder="Dupont"
            value={form.nom}
            onChange={handleChange}
            className={inputClasses('nom')}
          />
          {errors.nom && (
            <span className="font-futura text-xs text-rojo">{errors.nom}</span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="font-fjalla text-xs tracking-widest uppercase text-cuir/60">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="vous@exemple.fr"
          value={form.email}
          onChange={handleChange}
          className={inputClasses('email')}
        />
        {errors.email && (
          <span className="font-futura text-xs text-rojo">{errors.email}</span>
        )}
      </div>

      {/* Téléphone */}
      <div className="flex flex-col gap-1">
        <label className="font-fjalla text-xs tracking-widest uppercase text-cuir/60">
          Téléphone{' '}
          <span className="normal-case text-cuir/40 tracking-normal font-futura">
            (optionnel)
          </span>
        </label>
        <input
          type="tel"
          name="telephone"
          placeholder="06 00 00 00 00"
          value={form.telephone}
          onChange={handleChange}
          className={inputClasses('telephone')}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label className="font-fjalla text-xs tracking-widest uppercase text-cuir/60">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Votre message, votre demande de réservation..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClasses('message')} resize-none`}
        />
        {errors.message && (
          <span className="font-futura text-xs text-rojo">{errors.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="
          w-full mt-1 font-fjalla tracking-widest uppercase text-sm
          bg-flor text-white rounded-full px-8 py-3.5
          shadow-md hover:shadow-orange-500/30 hover:shadow-lg
          hover:bg-orange-500 hover:scale-[1.02]
          active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-200
        "
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Envoi…
          </span>
        ) : (
          'Enviar ✦'
        )}
      </button>
    </form>
  )
}
