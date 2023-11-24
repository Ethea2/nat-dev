import { experiences } from '@/constants/experiences'
import { ExpType } from '@/types/ExpType'
const DataDisplay = ({}) => {
    return (
        <section className="w-full min-h-[50vh]">
            {experiences.map((exp, index) => {
                return <div key={index}>HEllo</div>
            })}
        </section>
    )
}

export default DataDisplay
