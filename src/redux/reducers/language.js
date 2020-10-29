import {LANGUAGE} from '../types'


export const languagee = (state="", action) => {
    switch (action.type){
        case LANGUAGE:
            return {action};
        default:
            return state;
    }
};