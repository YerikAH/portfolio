import {BoxButtons, BoxGrid, BoxGridOne, BoxGridTwo, BoxImages, HeadlinePrincipal, SectionFirstStyles, TextButtonFill, TextButtonStroke} from "../styles/section_first";

function SectionFirst(){
	return(
	  <SectionFirstStyles>
	    <BoxGrid>
	      <BoxGridOne>
		<HeadlinePrincipal>
		  Hola, soy Front-end developer con React y flutter.
		</HeadlinePrincipal>
		<BoxButtons>
		  <TextButtonStroke>
		    Curriculum
		  </TextButtonStroke>
		  <TextButtonFill>
		    Certificados
		  </TextButtonFill>
		</BoxButtons>

	      </BoxGridOne>

	      <BoxGridTwo>
		<BoxImages>

		</BoxImages>
	      </BoxGridTwo>
	    </BoxGrid>

	  </SectionFirstStyles> 

	)
}

export default SectionFirst;
