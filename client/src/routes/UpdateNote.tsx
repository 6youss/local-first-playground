import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UpdateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getOneNote(parseInt(params.id!, 10));
  }, [params.id]);

  async function getOneNote(id: number) {
    try {
      const res = await fetch(`http://localhost:3000/notes/${id}`, {
        headers: { "content-type": "application/json" },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      setTitle(json.title);
      setContent(json.content);
    } catch (error) {
      alert(error);
    }
  }

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
        throw new Error(json.message);
      }
      alert("created" + JSON.stringify(json));
      clearForm();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Write a note</CardTitle>
            <CardDescription>Write your note bro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-start space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  className=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  className=""
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
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
