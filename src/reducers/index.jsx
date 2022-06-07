import { usersReducer } from "./usersReducer"

export default (state,action)=>{
    
    return {
        users:usersReducer(state.users,action),
    }
}