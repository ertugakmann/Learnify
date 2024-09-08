import { auth, db } from "@lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET(req, { params }) {
    const { uid } = params;

    try {
        // * Get information about the user
        const userDoc = await getDoc(doc(db, "users", uid));
        console.log("userDoc", userDoc);
        if (userDoc.exists()) {
            return new Response(JSON.stringify(userDoc.data()), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } else {
            return new Response(JSON.stringify({ error: "User not found" }), {
                status: 404,
            });
        }
    } catch (error) {
        console.error("Error fetching user details:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                status: 500,
            }
        );
    }
}
