export const Routes = {
  // GENERAL
  notFound: '/404',

  // AUTH
  login: '/login',
  signup: '/signup',
  finishSignup: '/finish-signup',
  forgetPassword: '/forget-password',
  verifyCode: '/verify-code',
  newPassword: '/new-password',
  confirmEmail: '/confirm-email',
  welcome: '/welcome',

  // PUBLIC
  home: '/',
  test: '/test',
  news: '/news',
  roadmaps: '/roadmaps',
  careers: '/roadmaps/careers/',
  framework: '/roadmaps/framework/',
  contactUs: '/contact-us',
  matching: '/matching',
  matchingQuestions: '/matching/questions',

  // PRIVATE
  profile: '/profile',
  editProfile: '/edit-profile',
  matchingChat: '/matching-chat/',
}

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
    Routes.welcome,
  ]
}

// Get public routes
export const getPublicRoutes = () => {
  return [
    Routes.notFound,
    Routes.home,
    Routes.news,
    Routes.roadmaps,
    Routes.careers,
    Routes.contactUs,
    Routes.login,
    Routes.signup,
    Routes.finishSignup,
    Routes.forgetPassword,
    Routes.verifyCode,
    Routes.newPassword,
    Routes.confirmEmail,
    Routes.matching,
    Routes.test,
    Routes.welcome,
    Routes.profile,
    Routes.editProfile,
  ]
}

// get private routes
export const getPrivateRoutes = () => {
  return [Routes.profile, Routes.editProfile, Routes.matchingChat, Routes.matchingQuestions]
}
