import {fireEvent, render, screen} from '@testing-library/react'
import Todo from "../Todo";
import {BrowserRouter} from "react-router-dom";
import {forEach} from "react-bootstrap/ElementChildren";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addBtnElement = screen.getByRole('button', { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(addBtnElement);
    })
}

const getTotalCompleted = (tasks) => {
    let numCompleted = 0;
    tasks.forEach(task => {
        if(task.classList.contains("todo-item-active")) numCompleted++;
    })
    return numCompleted;
}

describe("Todo", () => {
    it('Should render same text passed into title prop', async () => {
        render(<MockTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addBtnElement = screen.getByRole('button', { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        fireEvent.click(addBtnElement);
        const todoItemElement = screen.getByText(/Go Grocery Shopping/i)
        expect(todoItemElement).toBeInTheDocument();
    });

    it('Should render multiple items', async () => {
        render(<MockTodo />);
        addTasks(['Go Grocery Shopping', 'Pet the Cat', 'Eat Dinner']);
        const todoItemElements = screen.getAllByTestId("task-container")
        expect(todoItemElements.length).toBe(3);
    });

    it('Tasks added should not be completed.', async () => {
        render(<MockTodo />);
        addTasks(['Go Grocery Shopping', 'Pet the Cat', 'Eat Dinner']);
        const todoItemElements = screen.getAllByTestId("task-container")
        expect(getTotalCompleted(todoItemElements)).toBe(0);
    });

    it('tasks should have completed class when clicked.', async () => {
        render(<MockTodo />);
        addTasks(['Go Grocery Shopping']);
        const todoItemElements = screen.getAllByTestId("task-container")
        fireEvent.click(todoItemElements[0]);
        expect(getTotalCompleted(todoItemElements)).toBe(1);
    });

    it('tasks should have completed class when clicked.', async () => {
        render(<MockTodo />);
        addTasks(['Go Grocery Shopping', 'Pet the Cat', 'Eat Dinner']);
        const todoItemElements = screen.getAllByTestId("task-container")
        fireEvent.click(todoItemElements[0]);
        fireEvent.click(todoItemElements[1]);
        expect(getTotalCompleted(todoItemElements)).toBe(2);
    });
})