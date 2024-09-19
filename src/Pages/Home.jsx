import React from "react";

const programs = [
  "Graduate Programs",
  "Admissions",
  "Fees and Tuition",
  "Admission Requirements"
];

const studentImages = [
  "./images/pexels-buro-millennial-636760-1438072.jpg",
  "./images/pexels-nappy-935948.jpg",
  "./images/pexels-kampus-5940841.jpg",
  "./images/pexels-george-pak-7973205.jpg",
  "./images/pexels-pixabay-256455.jpg",
  "./images/pexels-keira-burton-6147276.jpg"
];

function Home() {
  return (
    <>
      <header className="text-center">
        <h1 className="font-bold text-3xl mt-6 font-mono">About University</h1>
      </header>
      
      <section className="flex justify-center mt-6">
        <img
          src="./images/pexels-kelly-1179532-23732423.jpg"
          alt="University campus"
          className="  h-auto"
        />
      </section>

      <section className="mt-6 mx-4 md:mx-10 lg:mx-20">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus nobis atque dicta officia, et illo officiis vitae qui tempora dolores molestiae repellat eaque praesentium inventore impedit ex at doloremque debitis exercitationem placeat consectetur accusamus. Perspiciatis voluptatum libero provident sed ipsa harum non repellat cumque eum maxime aliquid inventore debitis, rerum nesciunt officiis illo natus accusamus vero esse facere. Possimus eum beatae voluptatibus asperiores unde nesciunt minima reprehenderit. Libero, tempore temporibus dolore, vel deserunt recusandae itaque veniam exercitationem ipsam, ad quas quis! Eaque ex odio architecto nemo. Corporis ea architecto atque a sequi, alias id porro quod, quis ipsam, voluptates esse consectetur doloremque nostrum facere distinctio officia qui numquam excepturi voluptatum? Sequi quaerat omnis, assumenda ut minus, repellendus id quae minima quos autem sint et deserunt numquam debitis voluptate odio?
     </p>
      </section>

      <section className="mt-10 mx-4 md:mx-10 lg:mx-20">
        <h2 className="text-2xl font-bold text-green-500">List of Programs</h2>
        <nav>
          <ol className="list-disc italic text-lg">
            {programs.map((program, index) => (
              <li key={index} className="text-blue-800 mt-2">
                {program}
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <section className="mt-10">
        <header className="text-center">
          <h1 className="text-green-500 font-bold text-3xl font-mono">About Our Students</h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-4 md:mx-10 lg:mx-20 mt-10">
          {studentImages.map((src, index) => (
            <div key={index} className="p-2">
              <img src={src} alt={`Student activity ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <p className="mt-6 mx-4 md:mx-10 lg:mx-20">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos at possimus illum iure obcaecati ex, magnam doloremque dolorum aperiam distinctio doloribus! Eaque, facilis repellendus. Excepturi similique cum voluptatibus sit nemo fugit commodi, praesentium odio, maiores vel magnam velit voluptatum ducimus neque eos consequuntur aliquam omnis dignissimos harum id eum earum? Nihil ratione qui nobis, commodi officiis est minus dolorum, aspernatur possimus dolor quasi labore voluptas sint beatae placeat excepturi porro vel totam repellendus. Tempore, numquam enim veniam in quasi nesciunt ducimus explicabo rerum itaque dignissimos sequi repellendus distinctio eaque, ratione consectetur magnam alias voluptatibus veritatis expedita! Iure, totam aliquam?
          
        </p>
      </section>
    </>
  );
}

export default Home;
