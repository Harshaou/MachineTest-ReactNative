import { State } from "react-native-gesture-handler"

const initialState = 'INACTIVE'

export default (state = initialState, action) => {
    switch(action.type){
        case 'request':
            return 'INACTIVE'
        case 'services':
            return 'ACTIVE'
        case 'payment':
            return 'PAYMENT'
    default: 
        return state
    }
}