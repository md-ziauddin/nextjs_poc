// imports
import { authOptions } from '@/app/_utils/authOptions';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

// importing providers
import GithubProvider from 'next-auth/providers/github';

const handler: NextAuthOptions = NextAuth(authOptions);

export { handler as GET, handler as POST };
