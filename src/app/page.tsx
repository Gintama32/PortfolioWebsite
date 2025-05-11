import Image from 'next/image';
export default function Home() {
  return (
    <>
      <div className="text-center p-4" id="top">
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
      <div className="text-center mt-4 scroll">
        <p>Anonymous Next.js Messaging Web App</p>
        <p className="mt-5 text-2xl w-2/3 mx-auto">
          Secure, full-stack anonymous messaging web application using Next.js, incorporating server-side rendering
          (SSR) and dynamic site generation (DSG) for high performance
        </p>
        <table className="table-auto mx-auto mt-7 border-collapse border border-gray-300 bg-white text-black shadow-lg">
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
      <div className="text-center mt-10 scroll">
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
      <div className="flex justify-center gap-45 flex-wrap scroll mb-12">
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
      <div className="mt-9">
        <div className="text-center mx-auto mt-9 w-55 h-11 bg-white transform -skew-x-40 flex items-center justify-center shadow scroll_slide">
          <div className="transform skew-x-40 text-black text-3xl">About Me</div>
        </div>
        <div className="mt-7 text-center w-6xl mx-auto">
          <p className="text-blue-300 scroll">
            Highly motivated Computer Science student with hands-on experience in full stack development, seeking an
            entry level software engineer position. Proven ability in Object Oriented Programming, solid understanding
            of foundational data structures and algorithms, frontend and backend technologies, database management, and
            deployment processes. Collaborative team player committed to continuous learning and staying updated with
            industry trends.
          </p>
        </div>
        <div className="text-center mt-8 ml-4 w-80 h-11 bg-white transform -skew-x-40 flex items-center justify-center shadow scroll_slide">
          <div className="transform skew-x-40 text-black text-3xl">Technical Expertise</div>
        </div>
        <table className="table-auto mx-auto mt-9 border-collapse border border-gray-300 dark:bg-gray-800 text-white scroll">
          <tbody>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Programming Languages</td>
              <td className="border border-gray-700 px-4 py-2">Java, C, Python, Ruby</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Web Technologies</td>
              <td className="border border-gray-700 px-4 py-2">
                HTML5, CSS3, JavaScript, JSON, NodeJS, React, Tailwind CSS, Next JS, TypeScript
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Databases</td>
              <td className="border border-gray-700 px-4 py-2">MySQL, Mongo DB, SQLite, PostgreSQL</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Framework & Libraries </td>
              <td className="border border-gray-700 px-4 py-2">React, Node JS, Express.JS, shadcn</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Version Control </td>
              <td className="border border-gray-700 px-4 py-2">Git, GitHub</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Application Servers &Tools</td>
              <td className="border border-gray-700 px-4 py-2">Amazon EC2, Docker, Postman. Linux, PowerShell, AWS</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Design Tools</td>
              <td className="border border-gray-700 px-4 py-2">Figma, Lucid chart</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 w-40">Certifications</td>
              <td className="border border-gray-700 px-4 py-2">AWS Certified Cloud Practitioner</td>
            </tr>
          </tbody>
        </table>
        <button
          className="fixed bottom-[10vh] right-12 cursor-pointer bg-black shadow-lg slide_up text-2xl rounded-md p-2 
                  hover:shadow-[0_0_15px_5px_rgba(34,211,238,0.7)] hover:text-cyan-400 transition-all duration-300"
        >
          <a href="/res.pdf" download className="hover:text-cyan-400">
            Resume
          </a>
        </button>
      </div>
      <div className="mt-12">
        <h1 className="text-blue-500 text-center text-xl mt-3">⭐Certificates</h1>
        <div className="relative h-55">
          <div className="absolute left-4 top-30 w-55 h-15 bg-white transform -skew-x-30 flex items-center justify-center scroll_slide">
            <div className="transform skew-x-30 text-black text-center">
              College&#39;s Annual Student Research Conference
            </div>
          </div>
        </div>
        <iframe className="mx-auto scroll" src="/research.pdf" width="40%" height="560" title="Certificate"></iframe>
        <div className="mt-7 text-center w-xl mx-auto">
          <p className="scroll">
            Participated in our college&#39;s Annual Student Research Conference and presented my paper on &quot;The
            Impact of Artificial Intelligence on Employment Dynamics: Myth vs Reality&quot;.
          </p>
        </div>
        <div className="relative h-55">
          <div className="absolute right-3 top-30 w-55 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow scroll_slide">
            <div className="transform skew-x-30 text-black">AWS Cloud Practitioner</div>
          </div>
        </div>
        <Image className="mx-auto scroll" src="/aws.png" width="300" height="300" alt="aws certificate" />
        <p className="text-center mt-2 scroll">Valid till March 11, 2027</p>
        <div className="relative h-55">
          <div className="absolute left-3 top-30 w-60 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow scroll_slide">
            <div className="transform skew-x-30 text-black">CodeSignal Interview Practice</div>
          </div>
        </div>
        <Image className="mx-auto scroll" src="/code.png" width="600" height="600" alt="CodeSignal certificate" />
        <p className="text-center mt-2 scroll">Completed 4-week interview coding practice in python at CodeSignal</p>
        <div className="relative h-55">
          <div className="absolute right-3 top-30 w-59 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow scroll_slide">
            <div className="transform skew-x-30 text-black">Chartwells Dining Association</div>
          </div>
        </div>
        <Image className="mx-auto scroll" src="/chartwells.jpg" width="600" height="600" alt="chartwells certificate" />
        <p className="text-center mt-3 scroll">3 years work anniversary at Chartwells Dining Association in College </p>
      </div>
      <div className="mt-16">
        <h1 className="text-center text-3xl my-3 scroll">Contact Me</h1>
        <Image className="mx-auto rounded-full mt-8 scroll" src="/man.jpg" width="200" height="200" alt="image"></Image>
        <form className="border-4 border-white max-w-1/4 md:mt-12 sm:mt-6 lg:mt-28 flex flex-col text-center p-3 mx-auto scroll">
          <div className="p-4">
            <label className="text-2xl">Name: </label>
            <input type="text" className="border border-blue-400"></input>
          </div>
          <div className="p-4">
            <label className="text-2xl">Email: </label>
            <input type="email" className="border border-blue-400"></input>
          </div>
          <div className="p-4">
            <label className="block mb-1 text-2xl text-blue-500">Message For Me ?</label>
          </div>
          <textarea className="border max-w-3/2 mx-auto"></textarea>
          <button
            type="submit"
            className="max-w-40 mx-auto cursor-pointer mt-9 bg-cyan-500 shadow-lg text-2xl rounded-md p-2 hover:shadow-cyan-500/50"
          >
            Send
          </button>
        </form>
        <button className="fixed bottom-[5vh] right-12 cursor-pointer shadow-lg text-2xl rounded-md p-2 hover:shadow-cyan-500/50">
          <a href="#top">🔼</a>
        </button>
      </div>
    </>
  );
}

