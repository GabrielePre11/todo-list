import { useEffect, useState } from "react";

import { IoIosAddCircle } from "react-icons/io";
import CreatedTasks from "./CreatedTasks";
import CompletedTasks from "./CompletedTasks";

import ToDoItem from "./ToDoItem";
import { Task } from "../types";
import { toDoStorage } from "../types"

const ToDo = () => {
    // Input & States
    const [taskInput, setTaskInput] = useState('');
    const [taskList, setTaskList] = useState<Task[]>([]);

    const [createdTasks, setCreatedTasks] = useState<number>(0);
    const [completedTasks, setCompletedTasks] = useState<number>(0);
    const [initialized, setInitialized] = useState<boolean>(false);

    // Functions

    // Lets the user add a new task
    const addTask = (): void => {
        if (!taskInput.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            text: taskInput,
            isCompleted: false,
        };

        setTaskList((prev) => [...prev, newTask]);
        setCreatedTasks((prev) => prev + 1);
        setTaskInput('');
    };

    // Lets the user complete a task
    const checkTask = (id: number): void => {
        setTaskList((prev) => {
            // Toggles the 'isCompleted' state of the task clicked by the user
            const checkedTasks = prev.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            );

            // Filter the tasks that have been completed and count how many of them are completed
            const completedCount = checkedTasks.filter((task) => task.isCompleted).length;

            // Updates the value of setCompletedTasks with the number of the completed tasks
            setCompletedTasks(completedCount);

            // Returns the list (updated) of completed tasks!
            return checkedTasks;
        });
    };

    // Lets the user delete a task
    const deleteTask = (id: number): void => {
        // Deletes the task with the specified ID by returning a new list without it.
        setTaskList((prev) =>
            prev.filter((task) => task.id !== id))
        setCreatedTasks((prev) => prev - 1);
    }

    // Local Storage
    useEffect(() => {
        // Gets the task list from localStorage
        const storedTasks = localStorage.getItem("tasks");

        // If there are any stored tasks, parse them into an array
        if (storedTasks) {
            const parsedTasks: toDoStorage = JSON.parse(storedTasks);

            // Set the task list state with the parsed tasks array
            setTaskList(parsedTasks.tasks);

            // Set the created and completed tasks count state with the parsed createdCount and completedCount value (if there's no value, it's 0 by default)
            setCreatedTasks(parsedTasks.createdCount ?? 0);
            setCompletedTasks(parsedTasks.completedCount ?? 0)
        }
        // Set initialized to true after loading from localStorage,
        // so it doesn't overwrite stored data on first render
        setInitialized(true);
    }, []);

    useEffect(() => {
        // Saves to localStorage only after initialization
        if (initialized) {
            // Saves all the data by converting it into a string
            const toDoData: toDoStorage = {
                tasks: taskList,
                createdCount: createdTasks,
                completedCount: completedTasks
            };
            localStorage.setItem("tasks", JSON.stringify(toDoData));
        }
    }, [taskList, createdTasks, completedTasks, initialized]);

    return (
        <div className="container mx-auto px-4 xs:px-2 max-w-3xl">
            {/* Input Wrapper */}
            <div className="flex xs:flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    onChange={(e) => setTaskInput(e.target.value)}
                    onKeyDown={(e) => {
                        // Allows the user to run addTask() if the 'Enter' button is clicked!
                        if (e.key === 'Enter') {
                            addTask();
                        }
                    }}
                    value={taskInput}
                    className="border-2 border-header py-2.5 px-4 flex-1 rounded-lg bg-[#7f7f7f30] outline-0" placeholder="What's on your mind?" />

                {/* Add Button */}
                <button
                    onClick={addTask}
                    className="inline-flex items-center gap-1.5 text-md px-5 py-1
                    bg-cyan-700 rounded-lg cursor-pointer hover:bg-cyan-800
                    xs:w-full xs:justify-center xs:py-2
                    sm:w-max sm:justify-star">
                    Add <IoIosAddCircle className="text-[1.4rem]" />
                </button>
            </div>

            {/* Created and Completed Task */}
            <div className="flex items-center justify-between px-1.5 pt-10">
                <CreatedTasks createdTasks={createdTasks} />
                <CompletedTasks createdTasks={createdTasks} completedTasks={completedTasks} />
            </div>

            {/* TaskList */}
            <ul className="mt-4">
                {taskList.map((task) => (
                    <ToDoItem
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        isCompleted={task.isCompleted}
                        checkTask={checkTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ToDo