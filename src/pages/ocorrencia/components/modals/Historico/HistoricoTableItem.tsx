const HistoricoTableItem = () => {
  return (
    <>
      <tr>
        <th>Ordem:</th>
        <td>#1</td>
      </tr>
      <tr>
        <th>Status:</th>
        <td>Solicitado</td>
      </tr>
      <tr>
        <th>Órgão/Setor:</th>
        <td>
          Secretaria Municipal de Inovação e Tecnologia / Setor de
          Desenvolvimento
        </td>
      </tr>
      <tr>
        <th>Tramitado em:</th>
        <td>15/09/2025, 10:31:00</td>
      </tr>
      <tr>
        <th>Atendente:</th>
        <td>MEU NOME DA SILVA TESTES DE NOME GRANDE</td>
      </tr>
      <tr>
        <td // espacamento no final!
          style={{
            height: "4vh",
            border: "none",
            backgroundColor: "#ffffff"
          }}
        ></td>
      </tr>
    </>
  );
};

export default HistoricoTableItem;
