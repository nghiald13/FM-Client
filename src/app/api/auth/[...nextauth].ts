import NextAuth from "next-auth"

export default NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [],
})