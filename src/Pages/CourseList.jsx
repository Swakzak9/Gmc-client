import React from 'react'

const CourseLists = () => {
  const courses = [
    "Introduction to Computer Science",
    "Linear Algebra",
    "Literature and Composition",
    "International Relations",
    "Software Engineering",
    "Anatomy and Physiology",
    "Quantum Mechanics",
    "Modern African History",
    "Law",
    "Geography",
    "Electrical and Electronic Engineering",
    "Fine and Applied Arts"
  ];

  return (
    <>
    
    <h1 className='mt-14 font-bold flex text-2xl items-center italic justify-center'>University Courses</h1>
      <ul className='mt-4'>
        {courses.map((course, index) => (
          <li className='mt-3 pl-9 text-xl font-serif' key={index}>{course}</li>
        ))}
      </ul>
    </>
  );
}

export default CourseLists
