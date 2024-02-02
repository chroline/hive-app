import { ConnectionsGrid } from "~/components/connections-grid.tsx";
import { Header } from "~/components/header.tsx";
import { Button } from "~/components/ui/button.tsx";
import { Toaster } from "~/components/ui/toaster.tsx";
import connections from "~/util/data/connections.json";

const _BgShadow = () => (
  <div
    className={
      "fixed left-1/2 top-2/3 z-[-1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-hive-purple/[.5] opacity-50 blur-[900px]"
    }
  />
);

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
      <_BgShadow />
      <Toaster />
    </>
  );
}

export default App;
