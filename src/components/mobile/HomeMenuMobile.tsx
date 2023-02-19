import { HomeNavProps } from "../../interface/props";
import {
  MenuMobileList,
  MenuMobileLink,
} from "../../styles/menu_mobile_styles";

export default function HomeMenuMobile({
  navText,
  handleSwitch,
}: HomeNavProps) {
  return (
    <>
      <MenuMobileList>
        <MenuMobileLink href="#home" onClick={handleSwitch}>
          {navText.home}
        </MenuMobileLink>
      </MenuMobileList>
      <MenuMobileList>
        <MenuMobileLink href="#about" onClick={handleSwitch}>
          {navText.about}
        </MenuMobileLink>
      </MenuMobileList>
      <MenuMobileList>
        <MenuMobileLink href="#projects" onClick={handleSwitch}>
          {navText.portfolio}
        </MenuMobileLink>
      </MenuMobileList>
      <MenuMobileList>
        <MenuMobileLink href="#contact" onClick={handleSwitch}>
          {navText.contact}
        </MenuMobileLink>
      </MenuMobileList>
    </>
  );
}
