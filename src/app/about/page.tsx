export default function page() {
  return (
    <div className="flex-grow">
      <div className="text-center mx-auto mt-8 w-55 h-11 bg-white transform -skew-x-40 flex items-center justify-center shadow">
        <div className="transform skew-x-40 text-black text-3xl">About Me</div>
      </div>
      <div className="mt-7 text-center w-6xl mx-auto">
        <p className="text-blue-300">
          Highly motivated Computer Science student with hands-on experience in full stack development, seeking an entry
          level software engineer position. Proven ability in Object Oriented Programming, solid understanding of
          foundational data structures and algorithms, frontend and backend technologies, database management, and
          deployment processes. Collaborative team player committed to continuous learning and staying updated with
          industry trends.
        </p>
      </div>
      <button className="block mx-auto mt-7 text-blue-400 bg-white rounded-full px-3 text-2xl text-center">
        Resume
      </button>
      <div className="text-center mt-8 ml-4 w-80 h-11 bg-white transform -skew-x-40 flex items-center justify-center shadow">
        <div className="transform skew-x-40 text-black text-3xl">Technical Expertise</div>
      </div>
      <table className="table-auto mx-auto mt-9 border-collapse border border-gray-300 bg-white text-black">
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
    </div>
  );
}
