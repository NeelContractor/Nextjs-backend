
// if using actions then no need of api endpoints



// import { PrismaClient } from "@prisma/client";
// import { NextRequest, NextResponse } from "next/server";
// import client from "@/app/db"

// export async function POST(req: NextRequest) {
//     // const header = req.headers.get("authorization");
//     // const params = req.nextUrl.searchParams.get("name");
//     const body = await req.json();
//     try {
//         await client.user.create({
//             data: {
//                 email: body.email,
//                 password: body.password
//             }
//         });
//         return NextResponse.json({
//             body
//         })
//     } catch (e) {
//         console.log(e)
//         return NextResponse.json({
//             message: "Error while sign up",
//         }, {
//             status: 411
//         })
//     }
// }



