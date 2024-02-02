import { ConnectionsGrid } from "~/components/connections-grid.tsx";
import { Header } from "~/components/header.tsx";
import { Button } from "~/components/ui/button.tsx";
import { Toaster } from "~/components/ui/toaster.tsx";
import connections from "~/util/data/connections.json";

function App() {
  return (
    <>
      <Header />
      <main className={"mx-auto flex min-h-[100vh] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-32 md:pt-24"}>
        <h1 className={"mb-8 text-4xl font-medium"}>Connect your favorite tools.</h1>
        <ConnectionsGrid connections={connections} />
        <div className={"mt-16 space-x-4"}>
          <Button variant={"secondary"}>Back</Button>
          <Button>Finish</Button>
        </div>
      </main>
      <Toaster />
    </>
  );
}

export default App;
