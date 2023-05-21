import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
        //Github에서 발급받은ID
      clientId: process.env.GITHUB_ID_VER,
      // clientId: process.env.GITHUB_ID,
      //   Github에서 발급받은Secret
      clientSecret: process.env.GITHUB_SECRET_VER
      // clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID_VER,
        // clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_VER
        // clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }), 
      
  ],
  
  //jwt생성시쓰는암호 (아무거나 암호 쓰기)
  secret : process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions); 