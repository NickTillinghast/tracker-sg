import { NavigatonActions } from 'react-navigation';


let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigatonActions.navigate({
            routeName: routeName,
            params: params
        })
    )
}
