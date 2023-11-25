import { useEffect, useState } from 'react'
import { TechstackType, TECHSTACKS } from '@/constants/techstacks'
import { Input } from '../ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Md1K, MdDeleteForever } from 'react-icons/md'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@radix-ui/react-select'
import { toast } from 'react-toastify'
import { useAuth } from '@/hooks/useAuth'

interface ModalInput {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setRefetch: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddExpModal = ({ show, setShow, setRefetch }: ModalInput) => {
    const { user } = useAuth()
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [position, setPosition] = useState<string>('')
    const [techStacks, setTechStacks] = useState<Array<TechstackType>>([])
    const [selected, setSelected] = useState('')

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectValue = e.target.selectedOptions[0].label
        const stacks = techStacks.map((tech) => tech.stack)
        if (stacks.includes(selectValue)) {
            toast('The techstack is already in the list', {
                type: 'warning',
            })
            return
        }
        setTechStacks([
            ...techStacks,
            TECHSTACKS.find((tech) => tech.stack === selectValue),
        ])
    }

    const handleDelete = (stackName: string) => {
        const newStack = techStacks.filter((tech) => tech.stack !== stackName)
        setTechStacks(newStack)
    }

    const handleSubmit = async () => {
        try {
            if (
                title === '' ||
                body === '' ||
                position === '' ||
                techStacks.length === 0
            ) {
                console.log(title)
                console.log(body)
                console.log(position)
                console.log(techStacks.length)
                toast('Please complete the fields', { type: 'error' })
                return
            }
            const stacks = techStacks.map((tech) => tech.stack)

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/exp/${user?.id}`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        title,
                        body,
                        position,
                        techstacks: stacks,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            const json = await res.json()
            if (!res.ok) {
                return toast('Something went wrong', {
                    type: 'error',
                })
            }
            console.log(json)
            toast('upload success', {
                type: 'success',
            })
            setTechStacks([])
            setTitle('')
            setBody('')
            setPosition('')
            setRefetch((old) => !old)
            setShow(false)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            {show && (
                <div className="fixed flex justify-center items-center w-full h-screen">
                    <div
                        className="fixed bg-black/50 w-full h-screen"
                        onClick={() => setShow(false)}
                    />
                    <div className="border-2 border-white w-1/2 min-h-1/2 z-10 bg-black p-5 flex flex-col justify-center items-center">
                        <div className="w-3/4 text-3xl m-5 text-center flex justify-between items-center">
                            Add Experience!
                            <button
                                className="text-xl bg-white text-black rounded p-2"
                                onClick={handleSubmit}
                            >
                                submit
                            </button>
                        </div>
                        <div className="w-full h-full flex gap-4 flex-col justify-start items-center">
                            <Input
                                className="w-3/4 text-xl p-4"
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input
                                className="w-3/4 p-4"
                                placeholder="Position"
                                onChange={(e) => setPosition(e.target.value)}
                            />
                            <Textarea
                                className="w-3/4 resize-none p-5"
                                placeholder="Body"
                                onChange={(e) => setBody(e.target.value)}
                            />
                            <select
                                className="bg-black border-2 rounded w-3/4 p-5"
                                value={selected}
                                onChange={(e) => handleSelect(e)}
                            >
                                <option disabled={true} value="">
                                    Select a stack
                                </option>
                                {TECHSTACKS.map(
                                    (tech: TechstackType, index: number) => (
                                        <option value={tech.stack} key={index}>
                                            {tech.stack}
                                        </option>
                                    )
                                )}
                            </select>
                            {techStacks?.map(
                                (tech: TechstackType, index: number) => (
                                    <div
                                        key={index}
                                        className="w-3/4 flex justify-between border-2 border-white p-4"
                                    >
                                        <div className="text-xl">
                                            {tech.icon}
                                        </div>
                                        {tech.stack}
                                        <div
                                            className="text-2xl hover:scale-105 transition duration-300 ease-in cursor-pointer"
                                            onClick={() =>
                                                handleDelete(tech.stack)
                                            }
                                        >
                                            <MdDeleteForever />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
