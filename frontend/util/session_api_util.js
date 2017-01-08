export const signup = signupInfo => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: signupInfo
  })
);

export const login = loginInfo => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: loginInfo
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
