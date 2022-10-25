import { creationAction } from "../../untilities/reducer/reducer.util";

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'user/SET_CURRENTT_USER'
}

export const setCurrentUser = (user) => creationAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);