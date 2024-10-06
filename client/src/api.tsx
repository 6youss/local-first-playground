export interface Note {
  id: number;
  title: string;
}
export async function getNotes() {
  const res = await fetch("http://localhost:3000/notes", { headers: { "content-type": "application/json" } });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json);
  }
  return json as Note[];
}
