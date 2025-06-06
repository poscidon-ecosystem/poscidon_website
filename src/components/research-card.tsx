interface ResearchCardProps {
  title: string
  description: string
  icon: "dna" | "biomarker" | "genomics" | "ai"
}

export function ResearchCard({ title, description, icon }: ResearchCardProps) {
  // Define gradient backgrounds based on icon type
  const getGradientClass = () => {
    switch (icon) {
      case "dna":
        return "bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC]"
      case "biomarker":
        return "bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6]"
      case "genomics":
        return "bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7]"
      case "ai":
        return "bg-gradient-to-br from-[#78DFEC] to-[#22D6C4]"
      default:
        return "bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC]"
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
      <div className={`w-12 h-12 ${getGradientClass()} rounded-full flex items-center justify-center mb-4`}>
        {icon === "dna" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M2 15c6.667-6 13.333 0 20-6"></path>
            <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
            <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path>
            <path d="M17 6c-2.5 1.5-5 3-7 3s-4.5-1.5-7-3"></path>
            <path d="M14 18c-1-1-2-2-3-2s-2 1-3 2"></path>
          </svg>
        )}
        {icon === "biomarker" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
            <path d="M9 16H6"></path>
            <path d="M18 16h-3"></path>
            <path d="M9 8H6"></path>
            <path d="M18 8h-3"></path>
          </svg>
        )}
        {icon === "genomics" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M3 9h18M3 15h18"></path>
            <path d="M3 5v14"></path>
            <path d="M21 5v14"></path>
            <path d="M9 5v14"></path>
            <path d="M15 5v14"></path>
          </svg>
        )}
        {icon === "ai" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M7 7h10"></path>
            <path d="M10 16V7"></path>
            <path d="M14 16V7"></path>
            <path d="M17 12h-3"></path>
            <path d="M7 12h3"></path>
            <path d="M7 16h10"></path>
          </svg>
        )}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}
