//styles
import {
  BoxButtons,
  HeadlinePrincipal,
  TextButtonFill,
  TextButtonStroke,
} from "../../../styles/section_first";

export default function InfoPrincipal() {
  return (
    <>
      <HeadlinePrincipal>
        Hola, soy Front-end developer con React y flutter.
      </HeadlinePrincipal>
      <BoxButtons>
        <TextButtonStroke>Curriculum</TextButtonStroke>
        <TextButtonFill>Certificados</TextButtonFill>
      </BoxButtons>
    </>
  );
}
