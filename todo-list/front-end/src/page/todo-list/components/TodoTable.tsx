import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TodoModel } from "../../../domain/model/todo-model";
import { Api } from "../../../services/api";
import { getColumnsByModel } from "../../../shared/utils/getColumnsByModel";
import { ActionList } from "./ActionList";

const columns = getColumnsByModel();

export function TodoTable() {
  const api = new Api();
  const [todoList, setTodoList] = useState<TodoModel[]>([]);

  const populateTodoModel = async () => {
    const todos = await api.getTasks();
    setTodoList(todos);
  };

  useEffect(() => {
    populateTodoModel();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              console.log(column);
              if (column === "Action") {
                return (
                  <TableCell align="center" width={"1em"}>
                    {column}
                  </TableCell>
                );
              }
              return <TableCell align="right">{column}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {todo.id}
              </TableCell>
              <TableCell align="right">{todo.title}</TableCell>
              <TableCell align="right">{todo.description}</TableCell>
              <TableCell align="right">{todo.date.toString()}</TableCell>
              <TableCell align="right">
                <ActionList id={todo.id || "0"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TodoTable;
