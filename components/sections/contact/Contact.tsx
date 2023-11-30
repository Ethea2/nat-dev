'use client'

import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import Reveal from '@/components/animations/Reveal'
import { toast } from 'react-toastify'

interface ContactType {
    path: string
    icon: JSX.Element
}

const CONTACT = [
    { path: 'https://www.facebook.com/Ethea.Andres', icon: <FaFacebook /> },
    {
        path: 'https://www.instagram.com/nathan.wray/',
        icon: <AiFillInstagram />,
    },
    {
        path: 'https://www.linkedin.com/in/nathan-andres/',
        icon: <FaLinkedin />,
    },
    { path: 'https://github.com/Ethea2', icon: <FaGithub /> },
    { path: 'nathandres2001@gmail.com', icon: <MdEmail /> },
]

const Contact = () => {
    return (
        <section className="w-full flex justify-start items-start flex-col p-10">
            <div className="flex w-full font-bold text-4xl lg:text-7xl items-center justify-center text-center lg:text-left w-full mb-10">
                <Reveal>Contact me!</Reveal>
            </div>
            <div className="w-full text-5xl lg:text-9xl gap-10 flex flex-wrap justify-center items-center">
                {CONTACT.map((con, index) => {
                    if (!con.path.includes('https'))
                        return (
                            <div
                                onClick={() => {
                                    navigator.clipboard.writeText(con.path)
                                    toast('📧 Email copied to your clipboard')
                                }}
                                key={index}
                                className="hover:text-indigo-500 hover:scale-110 text-white transition ease-in duration-300 cursor-pointer"
                            >
                                <Reveal>{con.icon}</Reveal>
                            </div>
                        )
                    return (
                        <a
                            href={con.path}
                            key={index}
                            className="hover:text-indigo-500 hover:scale-110 text-white transition ease-in duration-300"
                        >
                            <Reveal>{con.icon}</Reveal>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Contact
