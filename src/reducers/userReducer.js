export const initialState={
    avatar:'',
    favorites:[],
};

export const userReducer = (state , action) =>{
    switch(action.type){
        case 'setAvatar':
            return{...state,avatar: action.payload.avatar};
            break;
            default:
                return state;
    }
}