import { getChistesApi } from "../service/chistes";
import React, { useEffect, useState } from "react";
import ContenedorChiste from "./ContenedorChistes";
import "./styleChistes.css"

function ChistesApp() {
  const [chistes, setChistes] = useState([]);
  const [chisteAleatorio, setChisteAleatorio] = useState(null);

  useEffect(() => {
    getChistesList();
  }, []);

  const getChistesList = async () => {
    const data = await getChistesApi();
    console.log(data);
    setChistes(data.jokes);
  };

  const mostrarChisteAleatorio = () => {
    if (chistes.length > 0) {
      const chiste = chistes[Math.floor(Math.random() * chistes.length)];
      setChisteAleatorio(chiste);
    }
  };

  return (
    <div className="chistes-container">
      <div>Chistes</div>
      <button className="chistes-btn" onClick={mostrarChisteAleatorio}>
        Mostrar chiste aleatorio
      </button>

      <ContenedorChiste contentChiste={chisteAleatorio} />
    </div>
  );
}

export default ChistesApp;
