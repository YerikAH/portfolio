// styles
import {HeaderStyle, ListDesorder, ListImageBox, ListLink, ListLogo, ListPoint, NavStyle} from "../styles/navegator_styles";

// images
import logo from "../assets/logo.svg"

function Navegator(){
  return (
    <>
      <HeaderStyle>
	<NavStyle>
	  <ListDesorder>
	    
	    <ListImageBox>
	      <ListLogo src={logo}/>
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

	  </ListDesorder>
	</NavStyle>
      </HeaderStyle>
    </>
  )
}


export default Navegator;
