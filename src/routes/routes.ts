export const Routes = {
  // GENERAL
  notFound: "/404",

  // AUTH
  login: "/login",
  signup: "/signup",
  finishSignup: "/finish-signup",
  forgetPassword: "/forget-password",
  verifyCode: "/verify-code",
  newPassword: "/new-password",
  confirmEmail: "/confirm-email",

  // PUBLIC
  home: "/",
  news: "/news",
  roadmaps: "/roadmaps",
  contactUs: "/contact-us",

  // PRIVATE
  profile: "/profile",
  editProfile: "/edit-profile",
  matching: "/matching",
};

// Get auth routes
export const getAuthRoutes = () => {
  return [
    Routes.login,
    Routes.signup,
    Routes.finishSignup,
    Routes.forgetPassword,
    Routes.verifyCode,
    Routes.newPassword,
    Routes.confirmEmail,
  ];
};

// Get public routes
export const getPublicRoutes = () => {
  return [
    Routes.home,
    Routes.news,
    Routes.roadmaps,
    Routes.contactUs,
    Routes.login,
    Routes.signup,
    Routes.finishSignup,
    Routes.forgetPassword,
    Routes.verifyCode,
    Routes.newPassword,
    Routes.confirmEmail,
  ];
};

// get private routes
export const getPrivateRoutes = () => {
  return [Routes.profile, Routes.editProfile, Routes.matching];
};
