import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import { GITHUB_SECRET, GITHUB_ID } from "@/config/serverConfig";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
