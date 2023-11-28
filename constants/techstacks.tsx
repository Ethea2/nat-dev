import { DiGo } from 'react-icons/di'
import { FaJava, FaJs, FaNodeJs, FaReact, FaUnity } from 'react-icons/fa'
import {
    SiArchlinux,
    SiCsharp,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiTypescript,
    SiVite,
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandSolidjs } from 'react-icons/tb'
export interface TechstackType {
    stack: string
    icon: JSX.Element
}

export const TECHSTACKS: TechstackType[] = [
    { stack: 'reactjs', icon: <FaReact /> },
    { stack: 'express', icon: <SiExpress /> },
    { stack: 'mongodb', icon: <SiMongodb /> },
    { stack: 'nodejs', icon: <FaNodeJs /> },
    { stack: 'go', icon: <DiGo /> },
    { stack: 'mysql', icon: <SiMysql /> },
    { stack: 'postgresql', icon: <SiPostgresql /> },
    { stack: 'solidjs', icon: <TbBrandSolidjs /> },
    { stack: 'nextjs', icon: <TbBrandNextjs /> },
    { stack: 'vite', icon: <SiVite /> },
    { stack: 'javascript', icon: <FaJs /> },
    { stack: 'typescript', icon: <SiTypescript /> },
    { stack: 'java', icon: <FaJava /> },
    { stack: 'unity', icon: <FaUnity /> },
    { stack: 'csharp', icon: <SiCsharp /> },
    { stack: 'arch', icon: <SiArchlinux /> },
]
