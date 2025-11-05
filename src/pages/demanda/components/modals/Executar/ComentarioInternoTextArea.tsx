import { useState } from "react";
import "./css/ComentarioInternoTextArea.css";

const ComentarioInternoTextArea = () => {
    const [comentarioInterno, setComentarioInterno] = useState('');

    return (
        <label className="comentario-interno-label">
        Comentário Interno
        <textarea
          name="comentario-interno"
          className="comentario-interno-textarea"
          value={comentarioInterno}
          onChange={(e) => setComentarioInterno(e.target.value)}
          placeholder="Adicione uma observação (somente para uso interno)"
          rows={5}
          style={{ width: "100%" }}
          required
        />
      </label>
    )
}

export default ComentarioInternoTextArea;