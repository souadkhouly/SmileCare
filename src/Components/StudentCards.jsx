import React from 'react';
import s1 from "../Assest/s1.jpg";
import s22 from "../Assest/s22.jpg";
import s33 from "../Assest/s33.jpg";
import s44 from "../Assest/s44.jpg";

const StudentCards = () => {
  const students = [
    {
      name: 'Sarah Johnson',
      gpa: '3.8',
      photo: s1
    },
    {
      name: 'Michael Chen',
      gpa: '3.9',
      photo: s22
    },
    {
      name: 'Emily Davis',
      gpa: '3.7',
      photo: s33
    },
    {
      name: 'Emily Davis',
      gpa: '3.7',
      photo: s44
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-primary-color">
      <h2
        className="text-center text-2xl sm:text-3xl md:text-[2.5rem] text-secondary-color mb-8 sm:mb-10 md:mb-12 bg-secondary-color bg-clip-text text-transparent font-bold"
      >
        Our Outstanding Students
      </h2>
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-4 
          gap-6 
          sm:gap-8 
          max-w-6xl 
          mx-auto 
          px-2 
          sm:px-4
        "
      >
        {students.map((student, index) => (
          <div
            key={index}
            className="
              bg-white 
              rounded-2xl 
              overflow-hidden 
              shadow-md 
              transition-transform 
              duration-300 
              hover:-translate-y-2 
              hover:shadow-xl
              flex flex-col
              h-full
            "
          >
            <div className="w-full h-56 sm:h-64 md:h-72 lg:h-60 xl:h-72 overflow-hidden">
              <img
                src={student.photo}
                alt={student.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6 text-center flex flex-col flex-1 justify-center">
              <h3 className="text-secondary-color text-lg sm:text-xl mb-1 sm:mb-2 font-semibold">{student.name}</h3>
              <p className="text-sky-blue font-medium text-base sm:text-lg">GPA: {student.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCards;