import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Firestore yapılandırmanızın olduğu dosya

export async function GET(req, { params }) {
    const courseRef = doc(db, "courses", params.id);
    try {
        const courseDoc = await getDoc(courseRef);
        if (!courseDoc.exists()) {
            return new Response(JSON.stringify({ error: "Course not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }
        return new Response(JSON.stringify(courseDoc.data()), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
