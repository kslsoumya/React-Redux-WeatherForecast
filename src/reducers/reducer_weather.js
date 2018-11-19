import { FETCH_WEATHER }  from "../actions/index";


export default function (state =[],action) {
    switch (action.type) {
    case FETCH_WEATHER :
    if(action.payload.status === 200)
    return [action.payload.data,...state]
    else
    return state
    }

    return state


}
