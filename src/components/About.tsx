
import React from "react";

const About = () => {
  const skills = [
    "JavaScript (ES6+)", 
    "TypeScript", 
    "React", 
    "Node.js", 
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Express",
    "MongoDB"
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="numbered-heading text-2xl font-semibold mb-10">
          <span className="text-highlight font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 text-lg">
            <p className="mb-4">
              Hello! My name is Gaurav Dixit, and I am an <b>Experienced Shopify Developer & Team Lead</b> with 8+ years crafting high-performance eCommerce solutions. I specialize in <b>Shopify theme and app development</b>, leveraging <b>Liquid, React, Node.js, and GraphQL</b> to build scalable, conversion-focused storefronts. 

</p>

            <p className="mb-4">
            Known for leading agile teams, mentoring developers, and diving deep into code for <b>quality, performance, and maintainability</b>. I thrive on <b>A/B testing, CRO, and data-driven UX improvements</b> that deliver measurable results. Whether it’s building from scratch or scaling existing systems, I bring a strong mix of <b>technical leadership</b> and hands-on <b>development</b> to every project.
            </p>
            {/* <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-highlight mr-2">▹</span> {skill}
                </li>
              ))}
            </ul> */}
<table
  className="min-w-full table-auto border-collapse text-[14px]"
  style={{ border: '1px solid rgb(73 86 112 / var(--tw-bg-opacity, 1))' }}
>
  <thead>
    <tr style={{ backgroundColor: 'rgb(155 135 245 / var(--tw-text-opacity, 1))' }}>
      <th
        className="px-4 py-2 text-left font-semibold text-black"
        style={{ border: '1px solid rgb(73 86 112 / var(--tw-bg-opacity, 1))' }}
      >
        Frontend
      </th>
      <th
        className="px-4 py-2 text-left font-semibold text-black"
        style={{ border: '1px solid rgb(73 86 112 / var(--tw-bg-opacity, 1))' }}
      >
        Backend
      </th>
      <th
        className="px-4 py-2 text-left font-semibold text-black"
        style={{ border: '1px solid rgb(73 86 112 / var(--tw-bg-opacity, 1))' }}
      >
        Tools & Platforms
      </th>
      <th
        className="px-4 py-2 text-left font-semibold text-black"
        style={{ border: '1px solid rgb(73 86 112 / var(--tw-bg-opacity, 1))' }}
      >
        Others
      </th>
    </tr>
  </thead>
  <tbody>
    {[
      ['React.js', 'Node.js', 'AWS, Heroku', 'Shopify Liquid'],
      ['JavaScript', 'PHP / Laravel', 'Git, GitHub', 'Agile / Scrum'],
      ['SCSS / CSS', 'GraphQL / REST', 'Shopify CLI', 'A/B Testing'],
      ['Tailwind CSS', 'MySQL, MongoDB', 'Cursor AI', 'Phaser.js (Game Dev)'],
    ].map((row, i) => (
      <tr key={i}>
        {row.map((cell, j) => (
          <td
            key={j}
            className="px-4 py-2"
            style={{ border: '1px solid rgb(73 86 112 / var(--tw-bg-opacity, 1))' }}
          >
            {cell}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>


          </div>
          
          <div className="relative group">
            <div className="relative rounded overflow-hidden w-full aspect-square">
              {/* Placeholder image with colored overlay */}
              <div className="absolute inset-0 bg-highlight/20 mix-blend-multiply z-10 rounded"></div>
              <div className="w-full h-full bg-gray-300 rounded">
                {/* Replace this with your actual image */}
                <img
                  src="/assets/1580413797329.jpeg"
                  alt="Profile Photo"
                />
              </div>
            </div>
            <div className="absolute -inset-1.5 border-2 border-highlight rounded z-[-1] group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
