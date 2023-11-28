import Reveal from '@/components/animations/Reveal'
import Image from 'next/image'

const ABTME = [
    '💻 I use arch btw',
    '🎮 I like competitive games ',
    '🎸 I love playing the Guitar',
    '🇵🇭 I was born in Philippines ',
    '🇴🇲 But I was raised in Oman ',
    '🚗💨 I am a fast learner ',
    '<> my favorite programming language is Go',
    '</> but JS and TS is my most used',
]

const About = () => {
    return (
        <main
            id="about"
            className="w-full min-h-screen flex flex-col justify-center items-center gap-10 lg:flex-row p-10"
        >
            <div className="w-full lg:w-1/2">
                <Image
                    src="/main-photo.JPG"
                    alt="Nathan's about photo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start h-full gap-4">
                <Reveal>
                    <div className=" text-5xl lg:text-7xl font-semibold hover:text-indigo-500 transition duration-200 ease-in cursor-pointer">
                        About me!
                    </div>
                </Reveal>
                <div className="text-xl lg:text-3xl text-left">
                    <ul className="flex flex-col gap-5">
                        {ABTME.map((item, index) => (
                            <Reveal key={index}>
                                <li>{item}</li>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default About
