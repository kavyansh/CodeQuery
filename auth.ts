import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
// [...name] - catch-all route within it after /api/auth/ for this
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
});
