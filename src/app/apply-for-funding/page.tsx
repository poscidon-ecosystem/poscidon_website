import { PageLayout } from "@/components/page-layout"
import { ProjectForm } from "@/components/ui/project-form"

export const metadata = {
  title: "Apply for Funding | Poscidon",
  description:
    "Submit your personalized medicine research project for funding consideration through our decentralized platform.",
}

export default function ApplyForFundingPage() {
  return (
    <PageLayout>
      <ProjectForm />
    </PageLayout>
  )
}
