"use client"
import { signup } from "@/app/actions/user";
import { useState } from "react"

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="p-4 border rounded pb-4">
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} className="p-2 m-2" type="text" placeholder="username" /> <br />
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }}  className="p-2 m-2" type="password" placeholder="password" /> <br />
                <div className="mt-4 flex justify-center">
                    <button onClick={async () => {
                        signup(email, password)
                    }} >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
}