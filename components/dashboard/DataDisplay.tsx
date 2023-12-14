'use client'

import { ExpType } from '@/types/ExpType'
import { useEffect, useRef, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { FaRegEdit, FaPlusSquare } from 'react-icons/fa'
import {
    AddExpModal,
    AddProjectModal,
    EditProjectModal,
} from '../modals/modals'
import { ProjectType } from '@/types/ProjectType'
import { useAuth } from '@/hooks/useAuth'
import { UserType } from '@/contexts/AuthContext'
import { Id, toast } from 'react-toastify'
const DataDisplay = ({ url, title }: { url: string; title: string }) => {
    const { user } = useAuth()
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
                                        <ProjectDisplay
                                            project={project}
                                            index={index}
                                            key={index}
                                            user={user}
                                        />
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

const ProjectDisplay = ({
    project,
    index,
    user,
}: {
    project: ProjectType
    index: number
    user: UserType | null
}) => {
    const [title, setTitle] = useState(project.title)
    const [body, setBody] = useState(project.body)
    const toastID = useRef<Id | null>(null)
    const onSubmit = async () => {
        toastID.current = toast.loading('Pushing changes...')
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/project/${project.id}`,
            {
                method: 'PATCH',
                body: JSON.stringify({ title: title, body: body }),
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
        const data = await res.json()
        if (!res.ok) {
            return toast.update(toastID.current, {
                render: 'Something went wrong',
                type: 'error',
                isLoading: false,
                autoClose: 3000,
            })
            console.log({ title, body })
        }

        toast.update(toastID.current, {
            render: 'upload success',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
        })
    }

    return (
        <div
            className="w-full h-fit flex border-2 items-center border-white/40 gap-2 p-2 my-5"
            key={index}
        >
            <div className="w-full h-fit flex flex-col items-start justify-center gap-2 p-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-black border-2 border-white p-4 text-xl font-bold"
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full h-36 p-5 border-2 border-white bg-black"
                />
                PROJECT ID: {project.id}
            </div>
            <div
                className="flex justify-center items-center gap-5 p-1 text-2xl hover:scale-150 transition ease-in duration-300 cursor-pointer"
                onClick={onSubmit}
            >
                <FaRegEdit />
            </div>
        </div>
    )
}

export default DataDisplay
