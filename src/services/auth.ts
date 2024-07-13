// Services
import { userService } from '@/services/userService'

// Routes
import { Routes } from '@/routes/routes'

// Config
import env from '@/config/env'

// Next auth
import Credentials from 'next-auth/providers/credentials'
import { getServerSession, type NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  secret: env.next_auth_secret,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: Routes.login,
    signOut: Routes.login,
    error: Routes.notFound,
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        return await userService.authenticate(email, password)
      },
    }),
  ],
  callbacks: {

    async jwt({ token, user }) {
      // update token if user is returned
      if (user) {
        token.user = user
      }

      return token
    },
    async session({ session, token }) {
      session.user = token.user as any
      return session
    },
  },
}

export const getServerAuthSession = () => getServerSession(authOptions)
