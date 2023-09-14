import { useState } from "react";
import nerdImg from "./assets/nerd.png";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Estado para almacenar el color de fondo

  const handleColorChange = () => {
    // Generar un color aleatorio en formato hexadecimal (#RRGGBB)
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <>
      <div>
        <img src={nerdImg} className="logo" alt="Nerd logo" />
      </div>
      <h1>The Geeks</h1>
      <div className="card" style={{ backgroundColor }}>
        <button onClick={handleColorChange}>Cambiar Color</button>
        <p>
          "The Geeks" es un grupo de estudio apasionado por la tecnología y el
          desarrollo de software, centrado en el aprendizaje y la exploración
          de la biblioteca de JavaScript, React. Nuestro grupo está formado por
          entusiastas de la programación, desarrolladores experimentados que
          comparten un interés común en crear aplicaciones web modernas y
          dinámicas.
        </p>
      </div>
    </>
  );
}

export default App;
