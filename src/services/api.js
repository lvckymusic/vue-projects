// services/api.js

export const apiLogin = async (credentials) => {
  try {
    // Simulating login for username 'testuser' and password 'testpassword'
    if (credentials.username === 'luckymusic' && credentials.password === 'yshi') {
      return { success: true, token: 'fake-token' };
    }
    return { success: false };  // Mock invalid login response
  } catch (error) {
    console.error('Login error:', error);
    return { success: false };
  }
};
