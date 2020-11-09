import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({

  container: {
backgroundColor:'white',
padding:5,
borderRadius:10,
width:Dimensions.get('screen').width  * 0.8,
top:10,
left:10,
alignSelf:'center',
flexDirection:'row',
alignItems:'center',
marginBottom:20


  },
  input: {
    padding:5,
  },
});

export const cityStyle = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    margin:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#e0e0e0',
    flexDirection:'row',
    alignItems:'center',
    
    


  },
  text: {
fontWeight:'bold',
marginLeft:5
  },
});

export const detailStyle = StyleSheet.create({
  container: {

  },
  name: {

  },
  address: {

  },
  phone: {

  },
});
