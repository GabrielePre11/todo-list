import { CreatedTasksProps } from '../types'

const CreatedTasks = ({ createdTasks }: CreatedTasksProps) => {
    return (
        <p className="inline-flex gap-2 items-center font-semibold text-amber-200 text-sm">
            Created
            <span className="grid place-items-center items-center bg-[#7f7f7f30] px-2.5 py-1 rounded-full text-[#bcbcbc]">
                {createdTasks}
            </span>
        </p>
    )
}

export default CreatedTasks