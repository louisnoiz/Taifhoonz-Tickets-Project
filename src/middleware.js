export default function (to, from, next) {
    const isAuthenticated = localStorage.getItem('token');
  
    if ((to.path !== '/loginpage' && to.path !== '/signuppage') && !isAuthenticated) {
      next('/loginpage');
    }
    else {
      next();
    }
  }