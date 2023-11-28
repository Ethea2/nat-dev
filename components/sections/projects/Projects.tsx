import CardCarousel from '@/components/animations/CardCarousel'

const getProjects = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/project/`,
        { next: { revalidate: 3600 } }
    )

    const json = await res.json()
    return json.data.data
}

const Projects = async () => {
    const projects = await getProjects()
    return (
        <div
            className="w-full flex flex-col p-2 h-screen justify-center"
            id="projects"
        >
            <CardCarousel
                items={projects}
                text1="My"
                text2="notable projects"
            />
        </div>
    )
}

export default Projects
