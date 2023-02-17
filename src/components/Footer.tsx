import { useContext } from "react";
import { FooterStyles, TextLink, TextNormal } from "../styles/footer_styles";
import FetchContext from "../context/dataContext";
export default function Footer() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <FooterStyles>
        <TextNormal>
          {dataContext.language_static.footer.text}
          <TextLink href="https://github.com/YerikAH" target="_blank">{dataContext.language_static.footer.text_link}</TextLink>
        </TextNormal>
      </FooterStyles>
    </FetchContext.Provider>
  );
}
