import Image from 'next/image'
import { Hero } from '@/components/hero/hero'
import { TimelineElement } from '@/components/timeline/timeline'

export default function Home() {
  return (
    <>
      <Hero />
      <TimelineElement />
    </>
  )
}
