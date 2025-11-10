import "./css/ComentarioInternoTextArea.css";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ComentarioInternoTextArea = ({ value, onChange }: Props) => {

    return (
        <label className="comentario-interno-label">
        Comentário Interno:
        <textarea
          name="comentario-interno"
          className="comentario-interno-textarea"
          value={value}
          onChange={onChange}
          placeholder="Adicione uma observação (somente para uso interno)"
          rows={5}
          style={{ width: "100%" }}
        />
      </label>
    )
}

export default ComentarioInternoTextArea;