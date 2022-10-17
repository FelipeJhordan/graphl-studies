import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
import TodoListPage from "./page/todo-list";

export function RouterOutlet() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterOutlet;
