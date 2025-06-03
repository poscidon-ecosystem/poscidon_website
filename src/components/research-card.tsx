interface ResearchCardProps {
  title: string
  description: string
  icon: "tumor" | "blood" | "brain" | "diabetes"
}

export function ResearchCard({ title, description, icon }: ResearchCardProps) {
  // Define gradient backgrounds based on icon type
  const getGradientClass = () => {
    switch (icon) {
      case "tumor":
        return "bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC]"
      case "blood":
        return "bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6]"
      case "brain":
        return "bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7]"
      case "diabetes":
        return "bg-gradient-to-br from-[#78DFEC] to-[#22D6C4]"
      default:
        return "bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC]"
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
      <div className={`w-12 h-12 ${getGradientClass()} rounded-full flex items-center justify-center mb-4`}>
        {icon === "tumor" && (
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
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
          </svg>
        )}
        {icon === "blood" && (
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
            <path d="M2 12h20"></path>
            <path d="M2 12a10 10 0 0 1 20 0"></path>
            <path d="M2 12a10 10 0 0 0 20 0"></path>
            <path d="M12 2v20"></path>
          </svg>
        )}
        {icon === "brain" && (
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
            <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path>
            <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path>
          </svg>
        )}
        {icon === "diabetes" && (
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
            <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
            <path d="M8 16h.01"></path>
            <path d="M8 20h.01"></path>
            <path d="M12 18h.01"></path>
            <path d="M12 22h.01"></path>
            <path d="M16 16h.01"></path>
            <path d="M16 20h.01"></path>
          </svg>
        )}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}
