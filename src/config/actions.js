export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'applicaiton/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            localStorage.removeItem('token');
          } else {
            dispatch(loginUser(data.user));
          }
        });
    }
  };
};

export const userPostFetch = user => {
  return dispatch => {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert('error creating account');
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
});

export const userLoginFetch = user => {

  return dispatch => {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert('Hey You! Have you been sipping on some wine? Its okay, we have all been there🍷🍷🍷🍷🍷🍷. Just reenter your username and password');
          window.location.href = "/login"
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};
// export const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY';
export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});