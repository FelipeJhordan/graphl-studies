import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateTaskPage } from "./page/create-task";
import HomePage from "./page/home";
import TodoListPage from "./page/todo-list";
import { UpdateTaskPage } from "./page/update-task";
import { ViewTaskPage } from "./page/view-task";

export function RouterOutlet() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoListPage />} />
        <Route path="/todo/task/:id" element={<ViewTaskPage />} />
        <Route path="/todo/task/:id/edit" element={< UpdateTaskPage/>} />
        <Route path="/todo/task/new" element={<CreateTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterOutlet;
