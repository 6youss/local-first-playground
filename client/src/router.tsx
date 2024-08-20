import { createBrowserRouter } from "react-router-dom";
import { NewNote } from "./routes/NewNote";
import { Root } from "./routes/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/new-note",
    element: <NewNote />,
  },
]);
