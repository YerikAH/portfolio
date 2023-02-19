// react router
import { useLocation } from "react-router-dom";

// interface or props or enum
import { Sections } from "../../enum/LanguageEnum";
import { LinksNavsProps } from "../../interface/props";

// styles
import {
  ListDesorder,
  ListImageBox,
  ListLink,
  ListLinkRouter,
  ListPoint,
} from "../../styles/navegator_styles";

// components
import LogoComponent from "../images/LogoComponent";

export default function LinksNav({
  navText,
  activeSection,
  changeSection,
}: LinksNavsProps) {
  let location = useLocation();
  return (
    <ListDesorder>
      <ListImageBox>
        <ListLink className="logo">
          <LogoComponent />
        </ListLink>
      </ListImageBox>

      {location.pathname === "/" ? (
        <>
          <ListPoint>
            <ListLink
              className={activeSection === 0 ? "true" : "false"}
              href="#home"
            >
              {navText.home}
            </ListLink>
          </ListPoint>
          <ListPoint>
            <ListLink
              className={activeSection === 1 ? "true" : "false"}
              href="#about"
            >
              {navText.about}
            </ListLink>
          </ListPoint>

          <ListPoint>
            <ListLink
              className={activeSection === 2 ? "true" : "false"}
              href="#projects"
            >
              {navText.portfolio}
            </ListLink>
          </ListPoint>

          <ListPoint>
            <ListLink
              className={activeSection === 3 ? "true" : "false"}
              href="#contact"
            >
              {navText.contact}
            </ListLink>
          </ListPoint>
        </>
      ) : (
        <>
          <ListPoint>
            <ListLinkRouter to="/" onClick={() => changeSection(Sections.home)}>
              {navText.home}
            </ListLinkRouter>
          </ListPoint>
          <ListPoint>
            <ListLinkRouter
              to="/"
              onClick={() => changeSection(Sections.about)}
            >
              {navText.about}
            </ListLinkRouter>
          </ListPoint>
          <ListPoint>
            <ListLinkRouter
              to="/"
              onClick={() => changeSection(Sections.projects)}
            >
              {navText.portfolio}
            </ListLinkRouter>
          </ListPoint>
          <ListPoint>
            <ListLinkRouter
              to="/"
              onClick={() => changeSection(Sections.contact)}
            >
              {navText.contact}
            </ListLinkRouter>
          </ListPoint>
        </>
      )}

      <ListPoint>
        <ListLinkRouter
          to="/blog"
          className={activeSection === 4 ? "true" : "false"}
        >
          {navText.blog}
        </ListLinkRouter>
      </ListPoint>
    </ListDesorder>
  );
}
