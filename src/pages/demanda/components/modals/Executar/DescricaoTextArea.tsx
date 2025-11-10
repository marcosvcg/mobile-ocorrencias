import "./css/DescricaoTextArea.css";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const DescricaoTextArea = ({ value, onChange }: Props) => {

    return (
        <label className="descricao-label">
        Descrição:<span style={{color: "#FF0000"}}>*</span>
        <textarea
          name="descricao"
          className="descricao-textarea"
          value={value}
          onChange={onChange}
          placeholder="Descrição do status atual (informação disponibilizada para o cidadão)"
          rows={5}
          style={{ width: "100%" }}
          required
        />
      </label>
    )
}

export default DescricaoTextArea;