import { NavigatonActions } from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigatonActions.navigate({
      routeName,
      params,
    }),
  );
}
