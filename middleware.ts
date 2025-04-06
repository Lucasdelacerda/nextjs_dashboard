import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
// inicializando NextAuth.js com o authConfigobjeto e exportando a authpropriedade. Você também está usando a matcheropção do Middleware para especificar que ele deve ser executado em caminhos específicos.
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};