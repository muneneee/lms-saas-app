import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
        <section className='home-section'>
          <CompanionCard
            id="12"
            name="Mbosso the Bongo Explorer"
            topic="Essence of the Brain"
            subject="Science"
            duration={45}
            color="#1E3A8A"
          />
          <CompanionCard
            id="123"
            name="Mbosso Explorer"
            topic="Bongo"
            subject="Music"
            duration={35}
            color="#22C55E"
          />
          <CompanionCard
            id="124"
            name="Bongo Explorer"
            topic="Essence"
            subject="Geography"
            duration={25}
            color="#F97316"
          />
        </section>

        <section className='home-section'>
          <CompanionsList/>
          <CTA/>
        </section>
    </main>
  )
}

export default Page