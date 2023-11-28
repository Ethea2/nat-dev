import Reveal from '@/components/animations/Reveal'
import Image from 'next/image'

const MainDetails = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center gap-5 items-center lg:p-20">
            <div className="rounded-full border-4 border-white z-10 w-72 h-72 lg:h-96 lg:w-96 overflow-hidden">
                <Image
                    src={'/profile-picture.JPG'}
                    className="object-cover object-center w-full h-full"
                    width="0"
                    height="0"
                    sizes="100vw"
                    alt="Nathan's Profile Picture"
                />
            </div>
            <div
                id="main-details-container"
                className="flex flex-col p-4 text-center lg:text-left gap-4 lg:w-1/2"
            >
                <div id="main-details-title" className="text-6xl font-bold">
                    <Reveal>Hello, I&apos;m Wray Nathan Andres!</Reveal>
                </div>
                <div className="w-full text-xl">
                    <Reveal>
                        I am an aspiring web developer hailing from Manila! I am
                        currently studying in DLSU as a Bachelor of Science in
                        Computer Science Major in Software Technology.
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default MainDetails
