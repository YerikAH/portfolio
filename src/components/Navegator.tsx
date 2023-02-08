// styles
import {HamImage, HeaderStyle, ListDesorder, ListHam, ListImageBox, ListLink, ListLogo, ListPoint, ListTheme, NavStyle, ThemeImage} from "../styles/navegator_styles";

// images
import logo from "../assets/logo.svg"
import ham from "../assets/ham.svg"
import sun from "../assets/sun.svg"
function Navegator(){
  return (
    <>
      <HeaderStyle>
	<NavStyle>
	  <ListDesorder>
	    
	    <ListImageBox>
	      <ListLink>
		<ListLogo src={logo}/>
	      </ListLink>
	    </ListImageBox>
	  
	    <ListPoint>
	      <ListLink>
		Home
	      </ListLink>
	    </ListPoint>
	    
	    <ListPoint>
	      <ListLink>
		Sobre mí	
	      </ListLink>
	    </ListPoint>
	    
	    <ListPoint>
	      <ListLink>
	      Portafolio	
	      </ListLink>
	    </ListPoint>
	    
	    <ListPoint>
	      <ListLink>
		Contactame	
	      </ListLink>
	    </ListPoint>
	  
	    <ListPoint>
	      <ListLink>
		Blog	
	      </ListLink>
	    </ListPoint>
	  
	  </ListDesorder>
	  <ListDesorder>
	    <ListTheme>
	      <ThemeImage src={sun}/>
	    </ListTheme>
	    <ListHam aria-label="open menu">
	      <HamImage src={ham} />
	    </ListHam>
	  </ListDesorder>
	</NavStyle>
      </HeaderStyle>
    </>
  )
}


export default Navegator;
