import User from "@/model/model";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import  bcrypt  from 'bcryptjs';
import ConnectDB from "@/utils/connectDB";


export default NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                await ConnectDB()
                const { email, password } = credentials;
               
                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error("Invalid email and password")
                }
                const isPasswordMatched = await bcrypt.compare(password, user.password)
                if (!isPasswordMatched) {
                    throw new Error("Invalid email and password")
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: "/login",
       
      },
    secret:"bahdonvia"

})