import Main from "../main";
import { LayoutRoot, RouterContainer } from "./styles";
const Layout = () => {
  return (
    <LayoutRoot>
      <RouterContainer>
        <Main />
      </RouterContainer>
    </LayoutRoot>
  );
};
export default Layout;
