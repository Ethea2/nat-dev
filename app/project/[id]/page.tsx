import { TECHSTACKS, TechstackType } from '@/constants/techstacks'
import { ProjectType } from '@/types/ProjectType'
import Image from 'next/image'

export async function generateStaticParams() {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/project/')
    const json = await res.json()
    return json.data.data.map((project: ProjectType) => ({
        id: project.id.toString(),
    }))
}

async function getData(id: string) {
    const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/project/${id}`
    )
    const json = await res.json()
    return json.data.data
}

async function ProjectPage({ params }: { params: { id: string } }) {
    const project = await getData(params.id)
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center">
            {project.title}
            <Image
                src={project.image}
                width={0}
                height={0}
                sizes="80vw"
                style={{ width: '80%', height: 'auto' }}
                alt={project.title + ' image'}
            />
            {project.body}
            <div className="flex gap-3 text-2xl my-2">
                {TECHSTACKS.map((tech, index) => {
                    if (project.techstacks.includes(tech.stack))
                        return <div key={index}>{tech.icon}</div>
                })}
            </div>
        </section>
    )
}

export default ProjectPage
