import { Suspense, JSX } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import TopNav from "@/components/nav/TopNav.tsx";

function App(): JSX.Element {
  return (
    <>
      <TopNav />
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </>
  );
}

export default App;
