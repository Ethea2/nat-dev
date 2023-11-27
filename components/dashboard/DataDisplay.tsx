'use client'

import { ExpType } from '@/types/ExpType'
import { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { FaRegEdit, FaPlusSquare } from 'react-icons/fa'
import { AddExpModal, AddProjectModal } from '../modals/modals'
import { ProjectType } from '@/types/ProjectType'
const DataDisplay = ({ url, title }: { url: string; title: string }) => {
    const [refetch, setRefetch] = useState<boolean>(false)
    const { data, error } = useFetch(url, refetch)
    const [showExp, setShowExp] = useState<boolean>(false)
    const [showProject, setShowProject] = useState<boolean>(false)
    return (
        <section className="flex flex-col w-full min-h-[50vh] border-y-2 border-white/40 p-10">
            <div className="text-center w-full m-5 text-5xl font-bold">
                {title}
            </div>
            {title === 'Experiences' ? (
                <>
                    {!error ? (
                        <>
                            {data?.map((exp: ExpType, index: number) => {
                                return (
                                    <div
                                        className="w-full h-fit flex border-2 items-center border-white/40 gap-2 p-2 my-5"
                                        key={index}
                                    >
                                        <div className="w-full h-fit flex items-center justify-start gap-2 p-2">
                                            <div className="text-2xl font-bold">
                                                {exp.title}
                                            </div>
                                            <div className="text-center">
                                                {exp.body.substring(0, 150)}...
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center gap-5 p-1 text-2xl hover:scale-150 transition ease-in duration-300 ">
                                            <FaRegEdit />
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <div>Error!</div>
                    )}
                    <div className="w-full h-fit flex items-center  text-5xl justify-center mt-3">
                        <div
                            className="border-2 border-white/40 p-3"
                            onClick={() => setShowExp(true)}
                        >
                            <FaPlusSquare className="hover:scale-125 transition ease-in duration-300" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {!error ? (
                        <>
                            {data?.map(
                                (project: ProjectType, index: number) => {
                                    return (
                                        <div
                                            className="w-full h-fit flex border-2 items-center border-white/40 gap-2 p-2 my-5"
                                            key={index}
                                        >
                                            <div className="w-full h-fit flex items-center justify-start gap-2 p-2">
                                                <div className="text-2xl font-bold">
                                                    {project.title}
                                                </div>
                                                <div className="text-center">
                                                    {project.body.substring(
                                                        0,
                                                        150
                                                    )}
                                                    ...
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center gap-5 p-1 text-2xl hover:scale-150 transition ease-in duration-300 ">
                                                <FaRegEdit />
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </>
                    ) : (
                        <div>Error!</div>
                    )}
                    <div className="w-full h-fit flex items-center  text-5xl justify-center mt-3">
                        <div
                            className="border-2 border-white/40 p-3"
                            onClick={() => setShowProject(true)}
                        >
                            <FaPlusSquare className="hover:scale-125 transition ease-in duration-300" />
                        </div>
                    </div>
                </>
            )}
            <AddProjectModal
                setShow={setShowProject}
                show={showProject}
                setRefetch={setRefetch}
            />
            <AddExpModal
                show={showExp}
                setShow={setShowExp}
                setRefetch={setRefetch}
            />
        </section>
    )
}

export default DataDisplay
