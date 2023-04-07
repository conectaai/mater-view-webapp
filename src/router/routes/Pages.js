import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/login',
    component: lazy(() => import('../../views/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/reset-password-basic',
    component: lazy(() => import('../../views/authentication/ResetPasswordBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-cover',
    component: lazy(() => import('../../views/authentication/ResetPasswordCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/verify-email-basic',
    component: lazy(() => import('../../views/authentication/VerifyEmailBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/verify-email-cover',
    component: lazy(() => import('../../views/authentication/VerifyEmailCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/two-steps-basic',
    component: lazy(() => import('../../views/authentication/TwoStepsBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/two-steps-cover',
    component: lazy(() => import('../../views/authentication/TwoStepsCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/misc/coming-soon',
    component: lazy(() => import('../../views/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/not-authorized',
    component: lazy(() => import('../../views/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/maintenance',
    component: lazy(() => import('../../views/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/error',
    component: lazy(() => import('../../views/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  }
]

export default PagesRoutes
