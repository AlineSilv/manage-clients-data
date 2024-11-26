// src/services/authService.ts

export const fakeAuth = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };
  