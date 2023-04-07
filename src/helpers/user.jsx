export const getUser = (userId, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  export const updateUser = (userId, token, user) => {
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
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
  
  export const updateUserSessionStorage = (user, next) => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('jwt')) {
        let auth = JSON.parse(sessionStorage.getItem('jwt'));
        auth.user = user;
        sessionStorage.setItem('jwt', JSON.stringify(auth));
        next();
      }
    }
  };
  
  
  export const getPurchaseHistory = (userId, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/orders/by/user/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  