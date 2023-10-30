import Head from 'next/head';
import ProjectForm from '../components/ProjectForm';
import { Metadata } from 'next';

const url = new URL('https://poscidon.com/submit-project/');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDon DAO | Submit Your Research Project',
  description: `Fill in this form to obtain funding for your personalized medicine-focused research project
  `,
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: url,
  },
  robots: "index, follow",
};

export default function ProjectSubmission() {
  return (
    <ProjectForm/>
  );
}
