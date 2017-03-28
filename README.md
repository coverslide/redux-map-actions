Redux-map-actions
====================

Simple action namespacer for redux actions.

Installation
------------

```
npm install redux-map-actions
```

Usage
-----

```
import { mapActions } from 'redux-map-actions';

const actionTypes = mapActions([
  'LOAD_USERS',
  'LOGIN_USER',
  'UPDATE_USER'
], 'USERS');

// the value of actionTypes will be
{
  LOAD_USERS: "USERS/LOAD_USERS",
  LOGIN_USER: "USERS/LOGIN_USER",
  UPDATE_USER: "USERS/UPDATE_USER",
}
```