import React from "react";

const programs = [
  "Graduate Programs",
  "Admissions",
  "Fees and Tuition",
  "Admission Requirements",
];

const studentImages = [
  "./images/pexels-buro-millennial-636760-1438072.jpg",
  "./images/pexels-nappy-935948.jpg",
  "./images/pexels-kampus-5940841.jpg",
  "./images/pexels-george-pak-7973205.jpg",
  "./images/pexels-pixabay-256455.jpg",
  "./images/pexels-keira-burton-6147276.jpg",
];

function Home() {
  return (
    <>
      <header className="text-center">
        <h1 className="font-bold text-3xl mt-6 font-mono">About University</h1>
      </header>

      <section className="flex justify-center p-6">
        <img
          src="./images/pexels-kelly-1179532-23732423.jpg"
          alt="University campus"
          className="h-auto"
        />
      </section>

      <section className="p-6 mx-4 md:mx-10 lg:mx-20">
        <p>
          We are a global laearning institution recogised worldwide.We are an
          Academicinstitution located in Nigeria. We have three Major Faculties
          including Education, Engineering, Sciences and Medical applied
          sciences and Arts. What we offer diferently from other conentional
          schools is that we are interested in not just producing garduates and
          alumni,but we try to make an impact on all our students. We desire a
          situation where each student gains more knowledge when leaving oue
          school compared to when they are admitted. Our institution makes use of
          visual illustrations, project and practicals, surveys and internship
          to ensure that information can be passed through our students in bits
          they easily comprehend.
          Our mission statement is to develop young minds that are useful and important to themselves and also their environment or community.
        </p>
      </section>

      <section className="p-6 mx-4 md:mx-10 lg:mx-20">
        <h2 className="text-2xl font-bold text-green-500 "> List of Programs</h2>
        <nav>
          <ol className="list-none italic text-lg">
            {programs.map((program, index) => (
              <li key={index} className="text-blue-800 mt-2">
                {program}
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <section className="p-6">
        <header className="text-center">
          <h1 className="text-green-500 font-bold text-3xl font-mono">
            About Our Students
          </h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-4 md:mx-10 lg:mx-20 mt-10">
          {studentImages.map((src, index) => (
            <div key={index} className="p-2">
              <img
                src={src}
                alt={`Student activity ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 mx-4 md:mx-10 lg:mx-20">
          Our Students are known for excellence. We have dedcated Lecturers and
          Proffesor well grounded in their disciplined who are tasked with the
          responsibility of carving and shaping these young and bright minds
          into future leaders that will leave footsteps in the sands of time. We
          understand that our students are tomorrow's leaders, which is why we
          our students study in a student-oriented enviroment in which they are
          taught real-life skills and they are trained to be able to easily
          integrate into the labor market. We try to balance education, learning
          and social skills that can create a balance for an effective learning
          eniroments for our students
        </p>
      </section>
      <div className="flex flex-col md:flex-row mt-12 ml-4 md:ml-24 h-auto md:h-96 w-full md:w-[1320px] bg-stone-600">
  <img
    src="images/pexels-alex-green-5699473.jpg"
    alt="Guidance counselor"
    className="pl-0 md:pl-40 h-60 mt-10 md:mt-20 w-full md:w-auto"
  />
  <div className="flex flex-col ml-5 mt-10 md:mt-40 md:ml-5">
    <p className="font-serif text-slate-300 w-full md:w-96">
      Do you need help on what course to study, or what advanced courses
      complements your previously held degree? Our guidance counselling
      team is here to assist you in making such decisions.
    </p>
    <button className="ml-0 md:ml-12 h-12 w-full md:w-44 mt-4 bg-white rounded-md font-bold text-sm hover:bg-blue-600">
      Contact our admission officers?
    </button>
  </div>
</div>

    </>
  );
}

export default Home;
