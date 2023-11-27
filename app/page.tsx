import GamingWeb from '@/pages/GamingWeb'
import Hero from '@/pages/Hero'
import Navbar from '@/pages/Navbar'
import Network from '@/pages/Network'

export default function Home() {
  return (
      <main className='bg-black'>
      <Navbar />
      <Hero /> 
      <div className='hidden lg:block '>
      <Network />
      <GamingWeb />
      </div> 
      </main>
  )
}
