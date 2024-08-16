"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const CourseOverview = () => {
    const [course, setCourse] = useState(null);
    const params = useParams();
    const { id } = params;
    console.log(id);

    // TODO: Check better way of getting query from url
    // ? This is a temporary solution

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`/api/courses/${id}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch on client side.");
                } else {
                    const data = await response.json();
                    setCourse(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchCourse();
    }, []);

    return (
        <div>
            {course ? (
                <div>
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>
                    <p>{course.category}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CourseOverview;
