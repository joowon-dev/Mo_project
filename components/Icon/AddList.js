import { View} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const CustomButton = (props) => {
  return (
      <View
        style={{
          width:  80,
          height:  80,
          borderRadius: 100,
          backgroundColor: props.color,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}
      >
        <Feather name={props.icon} size={50} color="white" />

      </View>
  );
};


export default CustomButton;