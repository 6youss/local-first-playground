import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleCancel() {
    clearForm();
  }

  function clearForm() {
    setTitle("");
    setContent("");
  }

  async function handleSave() {
    try {
      const res = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      alert("created" + JSON.stringify(json));
      clearForm();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Write a note</CardTitle>
            <CardDescription>Write your note bro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-start space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" className="" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" className="" value={content} onChange={(e) => setContent(e.target.value)} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={() => {
                handleCancel();
              }}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleSave();
              }}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
