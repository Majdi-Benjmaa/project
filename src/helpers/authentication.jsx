export const signup = user => {
  return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const signin = user => {
  return fetch(`${process.env.REACT_APP_API_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const signout = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('jwt');

    return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
      method: 'GET'
    })
      .then(response => {
        console.log('signout', response);
      })
      .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') return false;
  if (sessionStorage.getItem('jwt')) {
    return JSON.parse(sessionStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const forgotPasswordFetch = email => {
  return fetch(`${process.env.REACT_APP_API_URL}/forgot-password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
