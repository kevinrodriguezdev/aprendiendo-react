import { useEffect, useState } from "react";

function App() {
  //estado para el boton de seguir el raton
  const [enabled, setEnabled] = useState(false);
  //estado para la posicion del ratón
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({x: clientX, y: clientY})
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // lo que hace es desuscribir el efecto cuando se pulse el boton
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          border:"1px solid black",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
