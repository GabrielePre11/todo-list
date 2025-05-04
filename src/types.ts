export interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}

export interface ToDoItemProps extends Task {
    checkTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

export interface CreatedTasksProps {
    createdTasks: number;
}

export interface CompletedTasksProps {
    createdTasks: number;
    completedTasks: number;
}

export interface toDoStorage {
    tasks: Task[];
    createdCount: number;
    completedCount: number;
}