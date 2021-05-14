import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArquivoImportacao from '../pages/ArquivoImportacao';
import FormularioEntrega from '../pages/FormularioEntrega';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/arquivo-importacao" component={ArquivoImportacao} />
        <Route exact path="/formulario-entrega" component={FormularioEntrega} />
      </Switch>
    </>
  );
};

export default Routes;
