// Kullanıcıyı doğrulamak (basit örnek)
export const authenticateUser = (email, password) => {
    // Burada basit bir doğrulama yapılabilir (gerçek bir sistemde API entegrasyonu olmalı)
    return email === 'user@example.com' && password === 'password123';
  };
  
  // Kullanıcıyı çıkış yapma
  export const logoutUser = () => {
    // Çıkış yapma işlemleri (örneğin, LocalStorage'dan kullanıcı verilerini silme)
    localStorage.removeItem('user');
  };
  