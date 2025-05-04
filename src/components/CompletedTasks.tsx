import { CompletedTasksProps } from '../types'

const CompletedTasks = ({ createdTasks, completedTasks }: CompletedTasksProps) => {
    return (
        <p
            className="inline-flex gap-2 items-center font-semibold text-sm text-cyan-600">Completed
            <span
                className="px-2.5 py-1 bg-[#7f7f7f30] text-[#bcbcbc] rounded-full">
                {completedTasks} out of {createdTasks}
            </span>
        </p>
    )
}

export default CompletedTasks