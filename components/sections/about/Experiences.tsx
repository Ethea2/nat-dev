import Reveal from '@/components/animations/Reveal'
import { ExperienceType } from '@/constants/experiences'
import { TECHSTACKS } from '@/constants/techstacks'
import { ExpType } from '@/types/ExpType'

const getExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exp/`, {
        next: { revalidate: 3600 },
    })

    return res.json()
}

const Experiences = async () => {
    const experiences = await getExperiences()
    return (
        <div className="w-full flex flex-col mt-10 min-h-full">
            <div className="text-5xl lg:text-7xl font-bold w-full text-center lg:text-left mb-10">
                Experiences
            </div>

            <div className="w-full flex-wrap flex flex-col justify-evenly lg:flex-row gap-10">
                {experiences.data.data.map(
                    (experience: ExpType, index: number) => (
                        <div
                            className=" flex flex-col lg:w-1/4 w-full"
                            key={index}
                        >
                            <Reveal>
                                <div className="font-semibold text-4xl">
                                    {experience.title}
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="text-2xl">
                                    {experience.position}
                                </div>
                            </Reveal>
                            <div className="flex gap-3 text-2xl my-2">
                                {TECHSTACKS.map((tech) => {
                                    if (
                                        experience.techstacks.includes(
                                            tech.stack
                                        )
                                    )
                                        return <Reveal>{tech.icon}</Reveal>
                                })}
                            </div>
                            <Reveal>
                                <div className="text-left">
                                    {experience.body}
                                </div>
                            </Reveal>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Experiences
