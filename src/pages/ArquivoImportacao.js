import React, { useState, useEffect } from "react";
// import { ImportBox, Title, WrapperFlex } from "componentes-lib";

import { ImportBox } from "../components/ImportBox";
import { Title } from "../components/Title";
import { WrapperFlex } from "../components/WrapperFlex";
import { randomAPI } from "../services/api";

function ArquivoImportacao({ onClick, text, alert }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    randomAPI.get("pokemon/ditto");
  }, []);

  return (
    <WrapperFlex justifyCenter column>
      <Title text="Envio de arquivos" color="#ffc900" marginTop={30} />
      <ImportBox
        setFiles={setFiles}
        maxWidth={600}
        applyValidation={false}
        customValidations={(f) => {}}
      />
    </WrapperFlex>
  );
}

export default ArquivoImportacao;
