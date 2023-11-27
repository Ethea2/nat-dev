import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3,
    FaDatabase,
    FaCode,
    FaServer,
    FaGofore,
    FaWindowRestore,
    FaVials,
    FaTable,
} from 'react-icons/fa'
import {
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiVite,
    SiTypescript,
    SiExpress,
} from 'react-icons/si'
import { TbBrandSolidjs, TbBrandNextjs } from 'react-icons/tb'
import { DiGo } from 'react-icons/di'
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
]
