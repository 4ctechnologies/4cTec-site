import NextAuth from "next-auth"
import Asgardeo from "next-auth/providers/asgardeo"

declare module "next-auth"{
  interface User{
    username?:string;
    given_name?:string;
    family_name:string;
    preferred_username:string;
    name:string;
    picture:string;
    email_verified:string;
    email:string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Asgardeo({
    issuer: process.env.AUTH_ASGARDEO_ISSUER
  })],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.username = profile.username;
        token.given_name = profile.given_name;
        token.family_name = profile.family_name;
        token.email=profile.email;
        token.preferred_username = profile.preferred_username;
        token.picture = profile.picture;
        token.email_verified= profile.email_verified;
        token.name=profile.name;

      }

      return token;
    },
    async session({ session, token }) {            
      if (token) {
        session.user.username = token.username as string;
        session.user.name = token.name as string;
        session.user.given_name = token.given_name as string;
        session.user.family_name = token.family_name as string;
        session.user.preferred_username = token.preferred_username as string;
        session.user.email = token.email as string;
        session.user.email_verified = token.email_verified as string;
        session.user.picture = token.picture as string;
      }

      return session;
    },
    authorized: async ({request,auth})=>{
      if (!auth){
        return Response.redirect(new URL("/",request.nextUrl))
      }
      return !auth
    }
  }
})
