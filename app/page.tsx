import MainHeader from '@/components/sections/main/MainHeader'
import SideNav from '@/components/ui/SideNav'
import About from '@/components/sections/about/About'
import ExperienceSection from '@/components/sections/experience/ExperienceSection'
import Projects from '@/components/sections/projects/Projects'

export default function Home() {
    return (
        <main className="w-full h-screen">
            <SideNav />
            <MainHeader />
            <div className="w-full border-[1px] border-slate-200/40" />
            <About />
            <div className="w-full border-[1px] border-slate-200/40" />
            <ExperienceSection />
            <div className="w-full border-[1px] border-slate-200/40" />
            <Projects />
        </main>
    )
}
