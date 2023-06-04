import {Image} from 'react-native'

const Logo = (props) => {
  let iconImagePath;

  if (props.title === "Main"){
    iconImagePath = require('../assets/main.png')
  } else if (props.title === "Home") {
    iconImagePath = require('../assets/home.png');
  } else if (props.title === "User") {
    iconImagePath = require('../assets/user.png');
  }

  return (
    <Image
      style = {{width:40,height:40}}      
      source = {iconImagePath}
    />
  )
  
}

export default Logo;