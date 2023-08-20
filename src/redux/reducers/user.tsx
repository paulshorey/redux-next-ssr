import {AnyAction} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';

export type userState = {
    ip: string;
    city: string;
    country: string;
    isp: string;
};
const initialState = {
    ip: '',
    city: '',
    country: '',
    isp: '',
};

const reducer = (state: userState = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE: {
            console.log('user HYDRATE', action);
            return {...state, ...action.payload.user};
        }
        case 'user/meta':
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default reducer;
