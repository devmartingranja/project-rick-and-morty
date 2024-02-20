"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <h2>Volver a recargar</h2>
      <button onClick={() => reset()}>click ahora</button>
    </div>
  );
}
