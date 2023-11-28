import About from '@/components/sections/about/About'
import Contact from '@/components/sections/contact/Contact'
import ExperienceSection from '@/components/sections/experience/ExperienceSection'
import MainHeader from '@/components/sections/main/MainHeader'
import Projects from '@/components/sections/projects/Projects'
import SideNav from '@/components/ui/SideNav'

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
            <div className="w-full border-[1px] border-slate-200/40" />
            <Contact />
        </main>
    )
}
