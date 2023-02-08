// styles
import {BoxButtons, BoxGrid, BoxGridOne, BoxGridTwo, BoxImages, HeadlinePrincipal, IconImage, SectionFirstStyles, TextButtonFill, TextButtonStroke} from "../styles/section_first";

// images
import typescriptIcon from "../assets/icon-typescript.svg"
import reactIcon from "../assets/icon-react.svg";
import flutterIcon from "../assets/icon-flutter.svg";

function SectionFirst(){
	return(
	  <SectionFirstStyles>
	    <BoxGrid>
	      
	      <BoxGridOne>
		<BoxImages>
		  <IconImage src={reactIcon}/>
		  <IconImage src={flutterIcon}/>
		  <IconImage src={typescriptIcon}/>
		</BoxImages>
	      </BoxGridOne>


	      <BoxGridTwo>
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
	      </BoxGridTwo>

	    </BoxGrid>

	  </SectionFirstStyles> 

	)
}

export default SectionFirst;
