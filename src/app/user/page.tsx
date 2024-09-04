import { PrismaClient } from "@prisma/client";
import client from "@/app/db"

async function fetchData() {
    const user = await client.user.findFirst();

    return {
        email: user?.email,
        name: "super_neel"
    }
}

export default async function User() {
    const data = await fetchData();

    return (
        <div>
            {data.name}
            {data.email}
        </div>
    )
}