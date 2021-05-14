import React from "react";
// import { Title, Input, Button } from "componentes-lib";

import { Title } from "../components/Title";
import Button from "../components/Button";
import Input from "../components/Input";

function FormularioEntrega() {
  return (
    <React.Fragment>
      <Title text="Cadastro de Unidade" color="#ffc900" marginTop={30} />
      <Input width={300} height={30} name="nome" placeholder="Insira o nome" />
      <Input
        width={300}
        height={30}
        name="sobrenome"
        placeholder="Insira o Sobrenome"
      />
      <Button marginTop="10px" justifyCenter maxWidth="120px" type="submit">
        salvar
      </Button>
    </React.Fragment>
  );
}

export default FormularioEntrega;
