import Logo from "../../Logo.svg";
import {BtnHeader,HeaderContainer} from "./style"
interface IHeaderProps{
  button:string
  hasButton:boolean
  func?: ()=>void
}

function Header({ button, hasButton, func}:IHeaderProps) {
  return (
    <HeaderContainer >
    <img src={Logo} alt="" />
      {hasButton ? (
        <BtnHeader onClick={func}>{button}</BtnHeader>
        ) : (
        hasButton
      )}
    </HeaderContainer>
  );
}
export default Header;
