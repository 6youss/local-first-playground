import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import { getNotes } from "../api";

export function Root() {
  const query = useQuery({ queryKey: ["notes"], queryFn: getNotes });

  return (
    <div className="flex justify-start min-h-screen">
      <nav id="side-nav" className="flex flex-col bg-gray-100 gap-4 pt-4 w-72">
        <Button onClick={() => {}} variant="outline">
          New note
        </Button>
        {query.isError && <p>{String(query.error)}</p>}
        {query.isLoading ? (
          <p>Loading</p>
        ) : (
          query.data?.map((n) => {
            return (
              <Link
                key={n.id}
                to={`/update-note/${n.id}`}
                className="container mx-auto flex justify-between items-center"
              >
                <span>{n.title}</span>
              </Link>
            );
          })
        )}
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
