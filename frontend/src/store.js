import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer,userRegisterReducer,userCreateAddressReducer } from './Reducers/userReducer';


const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer ,
    userAddress: userCreateAddressReducer,
 

})
const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

    export default store