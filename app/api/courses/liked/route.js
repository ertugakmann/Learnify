import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@lib/firebase";

export async function GET(req) {
    const coursesRef = collection(db, "courses");
    const q = query(coursesRef, where("slider", "==", "liked"));

    try {
        const querySnapshot = await getDocs(q);
        const likedCourses = querySnapshot.docs.map((doc) => doc.data());

        return new Response(JSON.stringify(likedCourses), {
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
