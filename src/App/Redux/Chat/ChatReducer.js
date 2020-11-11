const GET_CHANNEL_DATA ='GET_CHANNEL_DATA';

export const getChannelData = channel =>({
    type : GET_CHANNEL_DATA,
    payload : channel
})

const initialState ={
    channelName: null,
    channelId : null,

}

 const chatReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_CHANNEL_DATA:
            return{
                ...state,
                // channelName: payload.channelName,
                channelId: payload[0].id
            }
        default:
            return state;
    }
 }
 export default chatReducer