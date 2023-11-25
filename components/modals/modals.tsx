import { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Md1K, MdDeleteForever } from 'react-icons/md'

interface ModalInput {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setRefetch: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddExpModal = ({ show, setShow, setRefetch }: ModalInput) => {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [position, setPosition] = useState<string>('')
    const [techStacks, setTechStacks] = useState<Array<string>>(['nodejs'])
    return (
        <>
            {show && (
                <div className="fixed flex justify-center items-center w-full h-screen">
                    <div
                        className="fixed bg-black/50 w-full h-screen"
                        onClick={() => setShow(false)}
                    />
                    <div className="border-2 border-white w-1/2 h-1/2 z-10 bg-black">
                        <div className="w-full text-3xl m-5 text-center">
                            Add Experience!
                        </div>
                        <div className="w-full h-full flex gap-4 flex-col justify-start items-center">
                            <Input
                                className="w-3/4 text-xl p-4"
                                placeholder="Title"
                            />
                            <Input
                                className="w-3/4 p-4"
                                placeholder="Position"
                            />
                            <Textarea
                                className="w-3/4 resize-none p-5"
                                placeholder="Body"
                            />
                            {techStacks?.map((tech: string, index: number) => (
                                <div
                                    key={index}
                                    className="w-3/4 flex justify-between border-2 border-white p-4"
                                >
                                    {tech}
                                    <div className="text-2xl hover:scale-105 transition duration-300 ease-in cursor-pointer">
                                        <MdDeleteForever />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
