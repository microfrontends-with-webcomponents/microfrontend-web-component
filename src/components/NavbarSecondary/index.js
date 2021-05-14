import {
  NavbarContentContainer,
  NavbarItemContainer,
} from "./styles";


function NavbarSecondary() {
  return (
    <NavbarContentContainer>
      <NavbarItemContainer to="/arquivo-importacao">
        arquivo importação
      </NavbarItemContainer>
      <NavbarItemContainer to="/formulario-entrega">
        formulario entrega
      </NavbarItemContainer>
    </NavbarContentContainer>
  );
}

export default NavbarSecondary;
