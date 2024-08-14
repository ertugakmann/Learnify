"use client";

import { addDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "@lib/firebase";
import { collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";

function UploadCourseForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    // TODO: The datas should check if they are already exist in the database!!!!

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.info("Uploading Course...");

        if (!title || !description || !category || !image) {
            toast.error("Please fill all the fields");
            return;
        }

        try {
            // Post Course Method
            const courseRef = await addDoc(collection(db, "courses"), {
                title,
                description,
                category,
                createdAt: new Date(),
            });

            // Upload Image to Firestore
            const storageRef = ref(storage, `course_images/${courseRef.id}`);
            await uploadBytes(storageRef, image);
            const photoURL = await getDownloadURL(storageRef);

            // Update Course with Image URL
            await updateDoc(doc(db, "courses", courseRef.id), {
                photoURL,
            });

            setTitle("");
            setDescription("");
            setCategory("");
            setImage(null);
            toast.success("Course has been uploaded successfully ✅");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="m-24">
            <div className="w-[28rem] mx-auto bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create an Course
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Course Title
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Kurs başlığını girin"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Kurs açıklamasını girin"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Category of Course
                        </label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Bir kategori seçin</option>
                            <option value="web-development">
                                Web Development
                            </option>
                            <option value="data-science">Data Science</option>
                            <option value="mobile-app-development">
                                Mobile App Development
                            </option>
                            <option value="programming-languages">
                                Programming Languages
                            </option>
                            <option value="game-development">
                                Game Development
                            </option>
                            <option value="machine-learning">
                                Machine Learning
                            </option>
                            <option value="artificial-intelligence">
                                Artificial Intelligence
                            </option>
                            <option value="cyber-security">
                                Cyber Security
                            </option>
                            <option value="ethical-hacking">
                                Ethical Hacking
                            </option>
                            <option value="blockchain">Blockchain</option>
                            <option value="devops">DevOps</option>
                            <option value="cloud-computing">
                                Cloud Computing
                            </option>
                            <option value="digital-marketing">
                                Digital Marketing
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Kurs Görseli
                        </label>
                        <input
                            type="file"
                            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Kursu Yükle
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UploadCourseForm;
