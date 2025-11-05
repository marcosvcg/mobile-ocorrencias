import { useState } from "react";
import "./css/DescricaoTextArea.css";

const DescricaoTextArea = () => {
    const [descricao, setDescricao] = useState('');

    return (
        <label className="descricao-label">
        Descrição
        <textarea
          name="descricao"
          className="descricao-textarea"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição do status atual (informação disponibilizada para o cidadão)"
          rows={5}
          style={{ width: "100%" }}
          required
        />
      </label>
    )
}

export default DescricaoTextArea;