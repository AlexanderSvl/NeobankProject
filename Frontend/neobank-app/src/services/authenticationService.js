import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../constants/environment'

export const login = async (email, password, navigate, setError) => {
  try {
    const response = await fetch(`${environment.baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });

    const data = await response.json();

    const token = data.token;
    localStorage.setItem('token', JSON.stringify(token));
    
    const decoded = jwtDecode(token);
    localStorage.setItem('user', JSON.stringify(decoded));

    navigate('/home');
    return true;
  } catch (error) {
    setError('Failed to login. Please check your credentials and try again.');
    console.error(error);
    return false;
  }
};

// export const getCurrentUser = () => {
//   const user = localStorage.getItem('user');
//   return user ? JSON.parse(user) : null;
// };

export const signOut = () => {
  localStorage.removeItem('token');
//   localStorage.removeItem('user');
  window.location.replace('/login');
};

export const getToken = () => {
  return localStorage.getItem('token');
}