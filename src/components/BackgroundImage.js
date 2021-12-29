import {Image, StyleSheet} from 'react-native';

function BackgroundImage() {
    return (
        <Image
            source= {{uri: 'https://github.com/amandasamuelsson/vegodays/blob/master/assets/backgroundImage.jpg?raw=true'}} 
            resizeMode="cover" 
            style={styles.image} > 
        </Image>
    );
}

const styles = StyleSheet.create({
image: {
    flex: 1,
    justifyContent: "center",
  
  },
}); 

export default BackgroundImage; 