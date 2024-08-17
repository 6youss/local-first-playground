import { Input } from "@/components/ui/input";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Input className="" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
    </>
  );
}

export default App;
