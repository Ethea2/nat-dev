import Carousel from '@/components/animations/Carousel'

const getProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project/`)

    return res.json()
}

const Projects = async () => {
    const projects = await getProjects()
    return (
        <div className="w-full min-h-screen flex flex-col p-10" id="projects">
            <div className="lg:ml-20">
                <Carousel cards={projects.data.data} />
            </div>
        </div>
    )
}

export default Projects
