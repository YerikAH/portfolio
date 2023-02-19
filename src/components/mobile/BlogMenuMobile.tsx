import { Sections } from "../../enum/LanguageEnum";
import { BlogNavProps } from "../../interface/props";
import {
  MenuMobileList,
  MenuMobileLinkRouter,
} from "../../styles/menu_mobile_styles";

export default function BlogMenuMobile({
  changeSection,
  navText,
}: BlogNavProps) {
  return (
    <>
      <MenuMobileList>
        <MenuMobileLinkRouter
          to="/"
          onClick={() => changeSection(Sections.home)}
        >
          {navText.home}
        </MenuMobileLinkRouter>
      </MenuMobileList>
      <MenuMobileList>
        <MenuMobileLinkRouter
          to="/"
          onClick={() => changeSection(Sections.about)}
        >
          {navText.about}
        </MenuMobileLinkRouter>
      </MenuMobileList>
      <MenuMobileList>
        <MenuMobileLinkRouter
          to="/"
          onClick={() => changeSection(Sections.projects)}
        >
          {navText.portfolio}
        </MenuMobileLinkRouter>
      </MenuMobileList>
      <MenuMobileList>
        <MenuMobileLinkRouter
          to="/"
          onClick={() => changeSection(Sections.contact)}
        >
          {navText.contact}
        </MenuMobileLinkRouter>
      </MenuMobileList>
    </>
  );
}
