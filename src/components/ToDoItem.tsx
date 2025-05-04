import { MdOutlineRadioButtonUnchecked, MdRadioButtonChecked, MdDelete } from "react-icons/md";

import { ToDoItemProps } from "../types";

const ToDoItem = ({ id, text, isCompleted, checkTask, deleteTask }: ToDoItemProps) => {
    return (
        <li
            onClick={() => checkTask(id)}
            className="bg-[#7f7f7f30] flex mt-2 px-2 py-3 items-center rounded-lg text-base cursor-pointer hover:bg-[#7f7f7f2d]">

            {/* Check Buttons */}
            {isCompleted ? (<MdRadioButtonChecked className="text-2xl text-amber-300" />) : (<MdOutlineRadioButtonUnchecked className="text-2xl text-amber-300" />)}

            {/* Text from the input */}
            <p className={`ml-2 text-base ${isCompleted ? 'line-through text-[#7f7f7ff8]' : 'text-white'}`}>{text}</p>

            {/* Delete Task Button */}
            <MdDelete
                onClick={() => deleteTask(id)}
                className="ml-auto text-2xl text-[#bcbcbc]"
            />
        </li>
    )
}

export default ToDoItem