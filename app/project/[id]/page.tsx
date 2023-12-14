import CardCarousel from '@/components/animations/CardCarousel'
import { PageWrapper } from '@/components/animations/PageWrapper'
import { TECHSTACKS } from '@/constants/techstacks'
import { ProjectType } from '@/types/ProjectType'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
    const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/project/',
        { next: { revalidate: 3600 } }
    )
    const json = await res.json()
    return json.data.data.map((project: ProjectType) => ({
        id: project.id.toString(),
    }))
}

const getProjects = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/project/`,
        { next: { revalidate: 3600 } }
    )

    const json = await res.json()
    return json.data.data
}

async function getData(id: string) {
    const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/project/${id}`,
        { next: { revalidate: 3600 } }
    )
    const json = await res.json()
    return json.data.data
}

async function ProjectPage({ params }: { params: { id: string } }) {
    const projectPromise = getData(params.id)
    const projectsPromise = getProjects()

    const [project, projects] = await Promise.all([
        projectPromise,
        projectsPromise,
    ])
    return (
        <PageWrapper>
            <section className="w-full min-h-screen flex flex-col justify-center items-center lg:p-20 lg:gap-10">
                <div className="w-full text-center text-4xl font-bold p-10">
                    {project.title}
                </div>
                <div className="relative w-full h-[15rem] lg:h-[40rem]">
                    <Image
                        src={project.image}
                        layout="fill"
                        alt={project.title + ' image'}
                        className="lg:object-contain p-2"
                    />
                </div>
                <div className="flex justify-center items-center gap-3 text-5xl lg:text-7xl my-2 p-10">
                    {TECHSTACKS.map((tech, index) => {
                        if (project.techstacks.includes(tech.stack))
                            return (
                                <div
                                    key={index}
                                    className=" hover:scale-110 transition duration-300 ease-in hover:text-indigo-600"
                                >
                                    {tech.icon}
                                </div>
                            )
                    })}
                </div>
                <div className="w-full text-left text-xl lg:text-2xl indent-8 lg:indent-10 p-10">
                    {project.body}
                </div>
                <div className="w-full p-0 m-0">
                    <CardCarousel
                        items={projects}
                        text1="My"
                        text2="other projects"
                    />
                </div>
                <Link
                    href="/"
                    className="border-2 p-4 rounded-xl text-xl font-bold hover:scale-110 transition duration-300 ease-in hover:text-indigo-500 hover:border-indigo-500"
                >
                    Go back to main page!
                </Link>
            </section>
        </PageWrapper>
    )
}

export default ProjectPage
