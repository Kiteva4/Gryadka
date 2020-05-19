import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main_screen_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue'
        
    },
    search_screen_container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: 'center',
        backgroundColor: 'skyblue'
        
    },
    requestRow: {
        flex: 1, 
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor: "white",
        margin: 5,
        flexDirection: 'column',
        elevation: 2,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
})