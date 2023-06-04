import {Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


const TabBar = (focused,name) =>{
  let iconImagePath;
  if(name==="홈"){
    iconImagePath= "ios-home"
  }else if (name==="새로운 미리 알림"){
    iconImagePath="add-circle-sharp"
  }else if (name==="목록"){
    iconImagePath="list-circle-sharp"
  }else if (name==="목록추가"){
    iconImagePath="ios-add-outline"
  }



  return (
    <Ionicons     
    color= "#0080ff"
    size={20}
    name={iconImagePath}
    
    />
  )
}

export default TabBar