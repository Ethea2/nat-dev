'use client'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { CardType } from '@/types/UiTypes'
import { ProjectType } from '@/types/ProjectType'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Carousel = ({ cards }: { cards: ProjectType[] }) => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />
                    })}
                </motion.div>
            </div>
        </section>
    )
}

const Card = ({ card }: { card: ProjectType }) => {
    return (
        <Link
            href={`/project/${card.id}`}
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
        >
            <div
                style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-5xl lg:text-7xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </Link>
    )
}

export default Carousel
