
import { Box } from "@mui/material"
import ItemsPort from "./itemsPortfolio/itemPort"
import WHDoComp from "./itemsPortfolio/doCopmponenet/doCopm"


const PortPage= () => {


 return (
  <Box sx={{width: "100%",}}>
    <ItemsPort/>
    <WHDoComp/>                            
  </Box>                          
 )
}


export default PortPage