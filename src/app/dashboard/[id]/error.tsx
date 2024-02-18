"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Volver a recargar</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
