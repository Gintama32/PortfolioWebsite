export default function Home() {
  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-4xl mt-7 scroll slide_down">Furba Lama Sherpa</h1>
        <h3 className="text-blue-400 text-xl mt-4 scroll slide_down"> Full-Stack Developer</h3>
      </div>

      {/* Container with relative positioning for Projects */}
      <div className="relative h-55">
        {/* Skewed Projects box on the side */}
        <div className="absolute left-4 top-30 w-55 h-11 bg-white transform -skew-x-30 flex items-center justify-center slide">
          <div className="transform skew-x-30 text-black text-3xl">Projects</div>
        </div>
      </div>

      {/* Centered paragraph below */}
      <div className="text-center mt-4 fade">
        <p>Anonymous Next.js Messaging Web App</p>
        <p className="mt-5 text-2xl w-2/3 mx-auto">
          Secure, full-stack anonymous messaging web application using Next.js, incorporating server-side rendering
          (SSR) and dynamic site generation (DSG) for high performance
        </p>
        <table className="table-auto mx-auto mt-7 border-collapse border border-gray-300 bg-white text-black">
          <thead>
            <tr>
              <th className="border border-gray-700 px-4 py-2 w-40"> </th>
              <th className="border border-gray-700 px-4 py-2">Tech Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Stack</td>
              <td className="border border-gray-700 px-4 py-2">MERN- MongoDB, Express.js, REACT, Node.js</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Authentication and Session Management</td>
              <td className="border border-gray-700 px-4 py-2">NextAuth</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Database / Design</td>
              <td className="border border-gray-700 px-4 py-2">MongoDB, Mongoose</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Validation and API Requests</td>
              <td className="border border-gray-700 px-4 py-2">Zod</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">UI and Design</td>
              <td className="border border-gray-700 px-4 py-2">Tailwind CSS, Shadcn framework</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Programming Language</td>
              <td className="border border-gray-700 px-4 py-2">TypeScript</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">AI Integration</td>
              <td className="border border-gray-700 px-4 py-2">OpenAI</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-10 fade">
        <p>
          <a href="https://github.com/Gintama32/ConceptFinder.git">AI-Powered Image Analysis Web App</a>
        </p>
        <p className="mt-5 text-2xl w-2/3 mx-auto">
          A full-stack web application that utilizes Clarifai’s General Image Concept Model to analyze and extract
          insights from images
        </p>
        <table className="table-auto mx-auto mt-7 border-collapse border border-gray-300 bg-white text-black">
          <thead>
            <tr>
              <th className="border border-gray-700 px-4 py-2 w-40"> </th>
              <th className="border border-gray-700 px-4 py-2">Tech Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Stack</td>
              <td className="border border-gray-700 px-4 py-2">PostgreSQL, Express.js, REACT, Node.js</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Database / Design</td>
              <td className="border border-gray-700 px-4 py-2">PostgreSQL, Knex.js</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">UI and Design</td>
              <td className="border border-gray-700 px-4 py-2">Tailwind CSS, Shadcn framework</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Programming Language</td>
              <td className="border border-gray-700 px-4 py-2">JavaScript</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">AI Integration</td>
              <td className="border border-gray-700 px-4 py-2">Clarifai</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="relative h-55">
        {/* Skewed Projects box on the side */}
        <div className="absolute right-3 top-30 w-55 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow scroll_slide">
          <div className="transform skew-x-30 text-black text-3xl">Internships</div>
        </div>
      </div>
      <div className="flex justify-center gap-45 flex-wrap scroll">
        <div className="blk p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
          <p className="text-lg">Radical AI</p>
          <p className="mt-3">Aug 2024 – Sept 2024</p>
          <p className="mt-1">AI Engineer</p>
          <p className="text-justify mt-3">
            Participated in a hackathon leveraging Google Gemini AI and LangChain frameworks to develop an AI-powered
            financial analysis tool. Deepened my understanding of AI integration and application development. Gained
            hands-on experience with training AI models using Vertex AI, including tasks such as data preparation, model
            tuning, and performance evaluation. Additionally, I developed AI-enhanced, object-oriented Python
            applications by integrating OpenAI language models, which added advanced conversational and analytical
            capabilities to the tools I built.
          </p>
        </div>
        <div className="p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
          <p className="text-lg">Sherpa Construction Consultation</p>
          <p className="mt-3">Jun 2023 – August 2023</p>
          <p className="mt-1">IT Intern</p>
          <p className="text-justify mt-3">
            Managed a sophisticated cloud database system to ensure meticulous organization and easy accessibility of
            files and directories. Leveraged strong understanding of both Microsoft and Apple operating systems to
            swiftly identify and resolve technical issues, minimizing disruptions in productivity. Developed and
            implemented data collection and management procedures aligned with academic coursework, demonstrating the
            practical application of theoretical knowledge. Consistently met and exceeded performance expectations while
            balancing academic projects, showcasing strong multitasking and prioritization skills.
          </p>
        </div>
      </div>
    </>
  );
}

