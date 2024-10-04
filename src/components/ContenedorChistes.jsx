import React from "react";
import "./styleChistes.css"

const ContenedorChiste = ({ contentChiste }) => {
  return (
    <>
      {contentChiste ? (
        <div className="chiste-aleatorio">
          <div className="chiste-category">{contentChiste.category}</div>
          <div className="chiste-joke">{contentChiste.joke}</div>
        </div>
      ) : (
        <div>No se ha seleccionado ningún chiste.</div>
      )}
    </>
  );
};

export default ContenedorChiste;
