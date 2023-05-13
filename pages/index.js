
import { Inter } from 'next/font/google'
import SkillBar from '@/components/Skillbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h2 className="text-2xl">Home page</h2>
      <SkillBar/>
    </>
  )
}
