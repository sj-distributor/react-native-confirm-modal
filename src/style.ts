import { StyleSheet } from 'react-native';

export default function () {
  return StyleSheet.create({
    flexContainer: {
      flex: 1,
      position: 'absolute',
    },
    button: {
      alignItems: 'center',
      borderColor: '#d2d2d2',
      borderTopWidth: StyleSheet.hairlineWidth,
      flex: 1,
      justifyContent: 'center',
      padding: 11,
      textAlign: 'center',
    },
    buttonStyle: {
      display: 'flex',
      flexDirection: 'row',
    },
    container: {
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 40,
      paddingRight: 40,
    },
    cancelButtonStyle: {
      borderBottomLeftRadius: 20,
    },
    confirmButtonStyle: {
      borderBottomRightRadius: 20,
    },
    descriptionStyle: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalView: {
      alignItems: 'center',
      backgroundColor: '#efefef',
      borderRadius: 20,
      margin: 20,
      paddingTop: 20,
    },
    textStyle: {
      color: '#3874f6',
      fontSize: 17,
      textAlign: 'center',
    },
    titleStyle: {
      color: '#000000',
      fontSize: 19,
      fontWeight: '600',
      marginBottom: 15,
      textAlign: 'center',
    },
  });
}
