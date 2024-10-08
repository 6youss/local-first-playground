import { createBrowserRouter } from "react-router-dom";
import { CreateNote } from "./routes/CreateNote";
import { Root } from "./routes/Root";
import { UpdateNote } from "./routes/UpdateNote";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "create-note",
        element: <CreateNote />,
      },
      {
        path: "update-note/:id",
        element: <UpdateNote />,
      },
    ],
  },
]);
