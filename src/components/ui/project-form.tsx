"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ChevronLeft, ChevronRight, Save, Trash2, Send, Info } from "lucide-react"
import * as countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"

interface FormData {
  title: string
  stage: string
  description: string
  strategy: string
  country: string
  address: string
  funds: string
  name: string
  email: string
  phone: string
  telegram: string
  referralSource: string
  referrerName: string
  referrerEmail: string
  lastSaved: string
  currentStep: number
}

export function ProjectForm() {
  const [title, setTitle] = useState("")
  const [stage, setStage] = useState("")
  const [description, setDescription] = useState("")
  const [strategy, setStrategy] = useState("")
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [addressError, setAddressError] = useState("")
  const [funds, setFunds] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [telegram, setTelegram] = useState("")
  const [referralSource, setReferralSource] = useState("")
  const [referrerName, setReferrerName] = useState("")
  const [referrerEmail, setReferrerEmail] = useState("")
  const [buttonText, setButtonText] = useState("Submit")

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)
  const [showSaveMessage, setShowSaveMessage] = useState(false)

  const [errors, setErrors] = useState({
    title: false,
    stage: false,
    description: false,
    strategy: false,
    country: false,
    funds: false,
    name: false,
    email: false,
    phone: false,
    telegram: false,
    address: false,
    referralSource: false,
    referrerName: false,
    referrerEmail: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [savedData, setSavedData] = useState<FormData | null>(null)
  const totalSteps = 4

  const [errorMessage, setErrorMessage] = useState("")
  const [errorStep, setErrorStep] = useState<number | null>(null)

  // Initialize countries
  countries.registerLocale(enLocale)
  const obj = countries.getNames("en", { select: "official" })
  const arr = Object.entries(obj).map(([key, value]) => ({
    label: value,
    value: key,
  }))

  const projectStages = [
    { value: "concept", label: "Concept" },
    { value: "preclinical_in_silico", label: "Preclinical (in silico)" },
    { value: "preclinical_in_vitro", label: "Preclinical (in vitro)" },
    { value: "preclinical_in_vivo", label: "Preclinical (in vivo)" },
    { value: "clinical", label: "Clinical" },
  ]

  const referralSources = [
    { value: "twitter", label: "X/Twitter" },
    { value: "discord", label: "Discord" },
    { value: "telegram", label: "Telegram" },
    { value: "search", label: "Search Engine (Google)" },
    { value: "reference", label: "Reference Person" },
  ]

  const handleErrors = (tempErrors: typeof errors) => {
    setErrors({ ...tempErrors })
    setTimeout(() => {
      setErrors({
        title: false,
        stage: false,
        description: false,
        strategy: false,
        country: false,
        funds: false,
        name: false,
        email: false,
        phone: false,
        telegram: false,
        address: false,
        referralSource: false,
        referrerName: false,
        referrerEmail: false,
      })
    }, 12000)
  }

  const isValidEthereumAddress = (address: string) => {
    if (!address) return true // Address is optional
    const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/
    return ethereumAddressRegex.test(address)
  }

  const handleValidation = () => {
    const tempErrors = {
      title: false,
      stage: false,
      description: false,
      strategy: false,
      country: false,
      funds: false,
      name: false,
      email: false,
      phone: false,
      telegram: false,
      address: false,
      referralSource: false,
      referrerName: false,
      referrerEmail: false,
    }
    let isValid = true

    if (title.length <= 0) {
      tempErrors.title = true
      isValid = false
    }
    if (stage.length <= 0) {
      tempErrors.stage = true
      isValid = false
    }
    if (description.length <= 0) {
      tempErrors.description = true
      isValid = false
    }
    if (strategy.length <= 0) {
      tempErrors.strategy = true
      isValid = false
    }
    if (country.length <= 0) {
      tempErrors.country = true
      isValid = false
    }
    if (funds.length <= 0 || Number(funds) <= 0) {
      tempErrors.funds = true
      isValid = false
    }
    if (name.length <= 0) {
      tempErrors.name = true
      isValid = false
    }
    if (email.length <= 0 || !email.includes("@")) {
      tempErrors.email = true
      isValid = false
    }
    if (phone.length <= 0) {
      tempErrors.phone = true
      isValid = false
    }
    if (telegram.length <= 0) {
      tempErrors.telegram = true
      isValid = false
    }
    if (address && !isValidEthereumAddress(address)) {
      tempErrors.address = true
      isValid = false
    }
    if (referralSource.length <= 0) {
      tempErrors.referralSource = true
      isValid = false
    }
    if (referralSource === "reference") {
      if (referrerName.length <= 0) {
        tempErrors.referrerName = true
        isValid = false
      }
      if (referrerEmail.length <= 0 || !referrerEmail.includes("@")) {
        tempErrors.referrerEmail = true
        isValid = false
      }
    }

    handleErrors(tempErrors)
    return isValid
  }

  const validateEthereumAddress = (value: string) => {
    if (!value) {
      setAddressError("")
      return
    }
    if (!value.startsWith("0x")) {
      setAddressError("Address must start with 0x")
      return
    }
    if (value.length < 42) {
      setAddressError("Address is too short")
      return
    }
    if (value.length > 42) {
      setAddressError("Address is too long")
      return
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(value)) {
      setAddressError("Address must contain only hexadecimal characters")
      return
    }
    setAddressError("")
  }

  const validateStep = (step: number) => {
    let isValid = true
    switch (step) {
      case 1:
        if (
          !name ||
          !email ||
          !phone ||
          !telegram ||
          !referralSource ||
          (referralSource === "reference" && (!referrerName || !referrerEmail))
        ) {
          isValid = false
        }
        break
      case 2:
        if (!title || !stage || !description || !country) {
          isValid = false
        }
        break
      case 3:
        if (!strategy || !funds || Number(funds) <= 0) {
          isValid = false
        }
        break
      case 4:
        if (address && !isValidEthereumAddress(address)) {
          isValid = false
        }
        break
    }
    return isValid
  }

  const findFirstErrorStep = () => {
    for (let i = 1; i <= totalSteps; i++) {
      if (!validateStep(i)) {
        return i
      }
    }
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === totalSteps) {
      const firstErrorStep = findFirstErrorStep()
      if (firstErrorStep) {
        setErrorStep(firstErrorStep)
        setErrorMessage(`Please complete all required fields in step ${firstErrorStep}`)
        return
      }

      const isValidForm = handleValidation()
      if (isValidForm && window.confirm("Are you sure you want to submit your project?")) {
        upload(e)
      }
    }
  }

  const scrollToTop = () => {
    const formElement = document.querySelector("form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      const newStep = currentStep + 1
      setCurrentStep(newStep)
      if (newStep === errorStep) {
        setErrorMessage("")
        setErrorStep(null)
      }
      scrollToTop()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)
      if (newStep === errorStep) {
        setErrorMessage("")
        setErrorStep(null)
      }
      scrollToTop()
    }
  }

  const goToErrorStep = () => {
    if (errorStep) {
      setCurrentStep(errorStep)
      setErrorMessage("")
      setErrorStep(null)
      scrollToTop()
    }
  }

  useEffect(() => {
    if (currentStep === errorStep) {
      setErrorMessage("")
      setErrorStep(null)
    }
  }, [currentStep, errorStep])

  async function upload(e: React.FormEvent) {
    e.preventDefault()

    const isValidForm = handleValidation()

    if (isValidForm) {
      try {
        setButtonText("Submitting...")

        // Get the label for the selected stage
        const selectedStage = projectStages.find((s) => s.value === stage)
        const stageLabel = selectedStage ? selectedStage.label : stage

        // Get the label for the selected referral source
        const selectedSource = referralSources.find((s) => s.value === referralSource)
        const sourceLabel = selectedSource ? selectedSource.label : referralSource

        const res = await fetch("/api/project", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            txId: "N/A",
            title,
            stage: stageLabel,
            description,
            strategy,
            country,
            address,
            funds,
            name,
            email,
            phone,
            telegram,
            referralSource: sourceLabel,
            referrerName,
            referrerEmail,
          }),
        })

        if (!res.ok) {
          throw new Error("Project submission failed")
        }

        setShowSuccessMessage(true)
        setShowFailureMessage(false)
        setButtonText("Submit")

        // Reset form fields
        setTitle("")
        setStage("")
        setDescription("")
        setStrategy("")
        setCountry("")
        setAddress("")
        setFunds("")
        setName("")
        setEmail("")
        setPhone("")
        setTelegram("")
        setReferralSource("")
        setReferrerName("")
        setReferrerEmail("")

        // Reset to first step after successful submission
        setCurrentStep(1)

        // Clear localStorage
        localStorage.removeItem("projectFormData")
        setSavedData(null)
      } catch (error) {
        console.error("Error:", error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Submit")
      }
    }
  }

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("projectFormData")
    if (saved) {
      const parsedData = JSON.parse(saved)
      setSavedData(parsedData)
      // Populate form with saved data
      setTitle(parsedData.title || "")
      setStage(parsedData.stage || "")
      setDescription(parsedData.description || "")
      setStrategy(parsedData.strategy || "")
      setCountry(parsedData.country || "")
      setAddress(parsedData.address || "")
      setFunds(parsedData.funds || "")
      setName(parsedData.name || "")
      setEmail(parsedData.email || "")
      setPhone(parsedData.phone || "")
      setTelegram(parsedData.telegram || "")
      setReferralSource(parsedData.referralSource || "")
      setReferrerName(parsedData.referrerName || "")
      setReferrerEmail(parsedData.referrerEmail || "")
      setCurrentStep(parsedData.currentStep || 1)
    }
  }, [])

  const handleSave = () => {
    const formData: FormData = {
      title,
      stage,
      description,
      strategy,
      country,
      address,
      funds,
      name,
      email,
      phone,
      telegram,
      referralSource,
      referrerName,
      referrerEmail,
      lastSaved: new Date().toISOString(),
      currentStep,
    }
    localStorage.setItem("projectFormData", JSON.stringify(formData))
    setSavedData(formData)
    setShowSaveMessage(true)
    setTimeout(() => setShowSaveMessage(false), 3000)
  }

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard all changes? This cannot be undone.")) {
      localStorage.removeItem("projectFormData")
      setSavedData(null)
      // Reset all form fields
      setTitle("")
      setStage("")
      setDescription("")
      setStrategy("")
      setCountry("")
      setAddress("")
      setFunds("")
      setName("")
      setEmail("")
      setPhone("")
      setTelegram("")
      setReferralSource("")
      setReferrerName("")
      setReferrerEmail("")
      setCurrentStep(1)
    }
  }

  const renderProgressBar = () => {
    return (
      <div className="mb-8 w-full">
        <div className="flex justify-between">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className={`flex items-center ${index < totalSteps - 1 ? "w-full" : ""}`}>
              <div
                className={`h-8 w-8 rounded-full ${
                  index + 1 <= currentStep ? "bg-white text-[#010737]" : "bg-white/20 text-white/50"
                } flex items-center justify-center text-sm font-bold`}
              >
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div className={`h-1 w-full ${index + 1 < currentStep ? "bg-white" : "bg-white/20"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs sm:text-sm text-white/70">
          <span>Contact Info</span>
          <span>Project Details</span>
          <span>Strategy</span>
          <span>Technical</span>
        </div>
      </div>
    )
  }

  const InfoTooltip = ({ message }: { message: string }) => (
    <div className="group relative inline-block">
      <Info className="h-4 w-4 text-white/70 cursor-help" />
      <div className="invisible group-hover:visible absolute z-10 w-64 p-2 mt-1 text-sm text-white bg-black/80 rounded-lg shadow-lg -left-32">
        {message}
      </div>
    </div>
  )

  const renderFormStep = () => {
    switch (currentStep) {
      case 1: // Contact Information
        return (
          <>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Project Leader Full Name<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  name="name"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.name && <p className="mt-2 text-red-400 text-sm">Name cannot be empty.</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  name="email"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.email && <p className="mt-2 text-red-400 text-sm">Please enter a valid email address.</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1234567890"
                  name="phone"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.phone && <p className="mt-2 text-red-400 text-sm">Phone number cannot be empty.</p>}
              </div>

              <div>
                <label htmlFor="telegram" className="block text-sm font-medium text-white mb-2">
                  Telegram Handle<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  placeholder="@yourtelegramhandle"
                  name="telegram"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.telegram && <p className="mt-2 text-red-400 text-sm">Telegram handle cannot be empty.</p>}
              </div>

              <div>
                <label htmlFor="referralSource" className="block text-sm font-medium text-white mb-2">
                  How did you hear about us?<span className="text-red-400 ml-1">*</span>
                </label>
                <select
                  value={referralSource}
                  onChange={(e) => {
                    setReferralSource(e.target.value)
                    if (e.target.value !== "reference") {
                      setReferrerName("")
                      setReferrerEmail("")
                    }
                  }}
                  name="referralSource"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" className="bg-[#010737] text-white">
                    Select Source...
                  </option>
                  {referralSources.map(({ value, label }) => (
                    <option key={value} value={value} className="bg-[#010737] text-white">
                      {label}
                    </option>
                  ))}
                </select>
                {errors?.referralSource && (
                  <p className="mt-2 text-red-400 text-sm">Please select how you heard about us.</p>
                )}
              </div>

              {referralSource === "reference" && (
                <>
                  <div>
                    <label htmlFor="referrerName" className="block text-sm font-medium text-white mb-2">
                      Reference Person's Name<span className="text-red-400 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={referrerName}
                      onChange={(e) => setReferrerName(e.target.value)}
                      placeholder="Enter the name of the person who referred you"
                      name="referrerName"
                      className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    {errors?.referrerName && (
                      <p className="mt-2 text-red-400 text-sm">Reference person's name cannot be empty.</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="referrerEmail" className="block text-sm font-medium text-white mb-2">
                      Reference Person's Email<span className="text-red-400 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      value={referrerEmail}
                      onChange={(e) => setReferrerEmail(e.target.value)}
                      placeholder="Enter the email of the person who referred you"
                      name="referrerEmail"
                      className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    {errors?.referrerEmail && (
                      <p className="mt-2 text-red-400 text-sm">
                        Please enter a valid email address for the reference person.
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="rounded-lg border border-red-400/50 bg-red-400/10 p-4 text-sm text-red-400">
                <p className="font-semibold">Important Notice:</p>
                <p>
                  Please ensure all contact information is accurate and up-to-date. We will use these details to
                  communicate about your project. If we are unable to contact you through the provided information, your
                  project cannot be considered for funding.
                </p>
              </div>
            </div>
          </>
        )

      case 2: // Project Details
        return (
          <>
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                  Project Title<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Your project title"
                  name="title"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.title && <p className="mt-2 text-red-400 text-sm">Title cannot be empty.</p>}
              </div>

              <div>
                <label htmlFor="stage" className="block text-sm font-medium text-white mb-2">
                  Project Stage<span className="text-red-400 ml-1">*</span>
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  name="stage"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" className="bg-[#010737] text-white">
                    Select Project Stage...
                  </option>
                  {projectStages.map(({ value, label }) => (
                    <option key={value} value={value} className="bg-[#010737] text-white">
                      {label}
                    </option>
                  ))}
                </select>
                {errors?.stage && <p className="mt-2 text-red-400 text-sm">Please select a project stage.</p>}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                  Project Description<span className="text-red-400 ml-1">*</span>
                  <p className="mt-1 text-sm font-normal text-white/70">
                    Please include: (1) Scientific foundation and background, (2) Detailed methodology/approach, (3) Key
                    milestones and deliverables, and (4) Expected impact on personalized medicine.
                  </p>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Example: Our project addresses the challenge of chemotherapy resistance in renal carcinoma.

Scientific Foundation:
- Recent studies show 40% of patients develop resistance
- Genetic markers (ABCB1, ABCG2) strongly correlate with treatment outcomes
- Preliminary data suggests personalized dosing could improve response rates

Methodology:
- Patient cohort analysis (n=200) using next-generation sequencing
- Machine learning model development for treatment response prediction
- Validation studies in patient-derived cell lines

Key Milestones:
1. Month 3: Complete genetic profiling of patient cohort
2. Month 6: Develop preliminary prediction algorithm
3. Month 9: Validate in vitro model
4. Month 12: Clinical validation study

Expected Impact:
Develop a genetic screening tool to predict optimal chemotherapy dosing, potentially improving treatment success rates by 30%."
                  name="description"
                  rows={12}
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.description && <p className="mt-2 text-red-400 text-sm">Description cannot be empty.</p>}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                  Research Country<span className="text-red-400 ml-1">*</span>
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  name="country"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" className="bg-[#010737] text-white">
                    Select Country...
                  </option>
                  {arr.map(({ label, value }) => (
                    <option key={value} value={label} className="bg-[#010737] text-white">
                      {label}
                    </option>
                  ))}
                </select>
                {errors?.country && <p className="mt-2 text-red-400 text-sm">A country must be selected.</p>}
              </div>
            </div>
          </>
        )

      case 3: // Strategy
        return (
          <>
            <div className="space-y-6">
              <div>
                <label htmlFor="strategy" className="block text-sm font-medium text-white mb-2">
                  Commercialization Strategy<span className="text-red-400 ml-1">*</span>
                </label>
                <textarea
                  value={strategy}
                  onChange={(e) => setStrategy(e.target.value)}
                  placeholder="Describe here how you expect to generate assets such as data and intellectual property and how to commercialize them. It does not have to be final."
                  name="strategy"
                  rows={6}
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.strategy && <p className="mt-2 text-red-400 text-sm">Strategy cannot be empty.</p>}
              </div>

              <div>
                <label htmlFor="funds" className="block text-sm font-medium text-white mb-2">
                  Proposed Funding Amount (in USD)<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="number"
                  value={funds}
                  onChange={(e) => {
                    const value = Math.max(0, Number(e.target.value))
                    setFunds(value.toString())
                  }}
                  min="0"
                  step="1"
                  placeholder="Fill in the amount of USD you need to fund your project..."
                  name="funds"
                  className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors?.funds && (
                  <p className="mt-2 text-red-400 text-sm">
                    {funds === "" ? "Funding amount cannot be empty." : "Funding amount must be greater than 0."}
                  </p>
                )}
              </div>
            </div>
          </>
        )

      case 4: // Technical
        return (
          <>
            <div className="space-y-6">
              <div>
                <label htmlFor="address" className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                  Ethereum Address (optional)
                  <InfoTooltip
                    message={`Once your project has been accepted, your funds will be sent to this Ethereum blockchain address.

Using blockchain technology we can ensure transparency, decentralization and reduced bias in the funding process. 
You can create a digital wallet at https://app.safe.global or at https://metamask.io

It is not yet required to have a wallet at this point. 
Our Due Diligence crew will help you setup a wallet.`}
                  />
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    const value = e.target.value
                    setAddress(value)
                    validateEthereumAddress(value)
                  }}
                  placeholder="0x0000000000000000000000000000000000000000"
                  name="address"
                  className={`w-full rounded-lg bg-white/10 border p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    addressError ? "border-red-400" : "border-white/20"
                  }`}
                />
                {(errors?.address || addressError) && (
                  <p className="mt-2 text-red-400 text-sm">
                    {addressError || "Please enter a valid Ethereum address."}
                  </p>
                )}
              </div>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <AnimatedSection className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Personalized Medicine Project Funded</h1>
          <p className="text-xl text-white/80">
            In four easy steps, provide information about your project and specify how to generate and potentially
            commercialize assets such as data and intellectual property from the conducted research.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {renderProgressBar()}

            {renderFormStep()}

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/20">
              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={handleSave}
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Progress
                </Button>
                <Button
                  type="button"
                  onClick={handleDiscard}
                  variant="outline"
                  className="border-red-400/50 text-red-400 hover:bg-red-400/10"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Discard
                </Button>
              </div>

              <div className="flex gap-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
                {currentStep < totalSteps ? (
                  <Button type="button" onClick={nextStep} className="bg-white text-[#010737] hover:bg-white/90">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" className="bg-white text-[#010737] hover:bg-white/90">
                    <Send className="w-4 h-4 mr-2" />
                    {buttonText}
                  </Button>
                )}
              </div>
            </div>

            {errorMessage && (
              <div className="flex flex-col items-center gap-4 rounded-lg border border-red-400/50 bg-red-400/10 p-4">
                <p className="text-center text-red-400">{errorMessage}</p>
                <Button type="button" onClick={goToErrorStep} className="bg-white text-[#010737] hover:bg-white/90">
                  Go to Step {errorStep}
                </Button>
              </div>
            )}

            {showSaveMessage && <p className="text-center text-green-400">Progress saved successfully!</p>}
            {showSuccessMessage && (
              <div className="text-center">
                <p className="text-green-400 text-lg font-semibold mb-2">
                  Your project has been submitted successfully!
                </p>
                <p className="text-white/80">
                  Thank you for your submission. Our team will review your project and get back to you soon.
                </p>
              </div>
            )}
            {showFailureMessage && <p className="text-center text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </AnimatedSection>
    </div>
  )
}
