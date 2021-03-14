import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();


export function navigate(name, params) {
  console.log("navigationRef",navigationRef.current);
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: name,
      params : params
    })
  );
}

export function goBack() {
  navigationRef.current?.goBack();
}