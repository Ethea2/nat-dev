'use client'

import { ExpType } from '@/types/ExpType'
import { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { FaRegEdit, FaPlusSquare } from 'react-icons/fa'
import { AddExpModal } from '../modals/modals'
const DataDisplay = ({ url, title }: { url: string; title: string }) => {
    const [refetch, setRefetch] = useState<boolean>(false)
    const { data, error } = useFetch(url, refetch)
    const [show, setShow] = useState<boolean>(false)
    return (
        <section className="flex flex-col w-full min-h-[50vh] border-y-2">
            <div className="text-center w-full m-5 text-5xl font-bold">
                Experiences
            </div>
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
                    onClick={() => setShow(true)}
                >
                    <FaPlusSquare className="hover:scale-125 transition ease-in duration-300" />
                </div>
            </div>
            <AddExpModal
                show={show}
                setShow={setShow}
                setRefetch={setRefetch}
            />
        </section>
    )
}

export default DataDisplay
