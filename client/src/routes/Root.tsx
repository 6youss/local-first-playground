import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function Root() {
  const [notes, setNotes] = useState<
    { id: number; title: string; content: string }[]
  >([]);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    try {
      const res = await fetch("http://localhost:3000/notes", {
        headers: { "content-type": "application/json" },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      setNotes(json);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex justify-start min-h-screen">
      <nav id="side-nav" className="flex flex-col bg-gray-100 gap-4 pt-4">
        <ul>
          {notes.map((n) => {
            return (
              <li key={n.id}>
                <Link
                  to={`/update-note/${n.id}`}
                  className="container mx-auto flex justify-between items-center"
                >
                  <span>{n.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
