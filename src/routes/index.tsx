import { createFileRoute } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="p-8">
      <Button variant="destructive">Click me</Button>
      <span className="text-lime-500">home</span>
    </div>
  );
}
