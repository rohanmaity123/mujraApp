import {NavigationActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';

let _navigator;

function setTopLevelNavigator(r) {
  _navigator = r;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}
function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}

function back() {
  _navigator.dispatch(NavigationActions.back());
}

export default {
  navigate,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
  back,
};
