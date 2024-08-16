import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@lib/firebase";

export async function GET(req) {
    const coursesRef = collection(db, "courses");
    const q = query(coursesRef, where("slider", "==", "popular"));

    try {
        const querySnapshot = await getDocs(q);
        const popularCourses = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
        return new Response(JSON.stringify(popularCourses), {
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
