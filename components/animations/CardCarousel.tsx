'use client'
import { TECHSTACKS } from '@/constants/techstacks'
import { ProjectType } from '@/types/ProjectType'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useMeasure from 'react-use-measure'
import Reveal from './Reveal'

const CARD_WIDTH = 350
const CARD_HEIGHT = 350
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
}

const CardCarousel = ({
    items,
    text1,
    text2,
}: {
    items: ProjectType[]
    text1: string
    text2: string
}) => {
    const [ref, { width }] = useMeasure()
    const [offset, setOffset] = useState(0)

    const CARD_BUFFER =
        width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

    const CAN_SHIFT_LEFT = offset < 0

    const CAN_SHIFT_RIGHT =
        Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER)

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) {
            return
        }
        setOffset((pv) => (pv += CARD_SIZE))
    }

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) {
            return
        }
        setOffset((pv) => (pv -= CARD_SIZE))
    }

    return (
        <section className="bg-black" ref={ref}>
            <div className="relative overflow-hidden p-4">
                {/* CARDS */}
                <div className=" max-w-6xl">
                    <Reveal>
                        <p className="mb-4 text-7xl font-bold text-white lg:px-10 text-center lg:text-left">
                            {text1 + ' '}
                            <span className="text-indigo-600">{text2}</span>
                        </p>
                    </Reveal>
                    <motion.div
                        animate={{
                            x: offset,
                        }}
                        className="flex mx-auto w-full p-10"
                    >
                        {items.map((item) => {
                            return <Card key={item.id} {...item} />
                        })}
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_LEFT ? '0%' : '-100%',
                        }}
                        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_RIGHT ? '0%' : '100%',
                        }}
                        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </motion.button>
                </>
            </div>
        </section>
    )
}

const Card = ({ id, techstacks, title, body, image }: ProjectType) => {
    const router = useRouter()
    return (
        <div
            className="relative shrink-0 cursor-pointer border-2 border-white rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            onClick={() => router.push(`/project/${id}`)}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                <p className="my-2 text-3xl font-bold">{title}</p>
                <div className="flex gap-3 text-2xl my-2">
                    {TECHSTACKS.map((tech, index) => {
                        if (techstacks.includes(tech.stack))
                            return <div key={index}>{tech.icon}</div>
                    })}
                </div>
                <p className="text-lg text-slate-300">
                    {body.substring(0, 50)}...
                </p>
            </div>
        </div>
    )
}

export default CardCarousel
