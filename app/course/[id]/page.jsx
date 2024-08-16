"use client";

import React, { useEffect, useState } from "react";

const CourseOverview = () => {
    const [course, setCourse] = useState(null);

    // TODO: Check better way of getting query from url
    // ? This is a temporary solution
    const pathName = window.location.pathname;
    const query = pathName.split("/")[2];

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`/api/courses/${query}`);

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
