import { Suspense } from "react";
import PoemClient from "./PoemClient";

export default function Page() {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <PoemClient />
    </Suspense>
  );
}