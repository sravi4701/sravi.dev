import React from "react";

function Projects() {
  return (
    <main>
      <h1 className="text-3xl md:text-4xl font-medium px-2 md:px-0">
        Projects
      </h1>
      {/* Eglify */}
      <div className="projects-container mt-4 px-2 md:px-0">
        <div className="border border-violet-300 bg-violet-50 rounded md:w-3/4 flex flex-col">
          <div className="flex justify-between p-2">
            <div className="font-medium">Eglify</div>
            <div className="italic">2023</div>
          </div>
          <div className="p-2">A user-friendly referral marketing platform for local businesses</div>
          <div className="px-2 text-gray-700">
            Python • Django • Next.js • AWS • React
          </div>
          <div className="p-2">
            <a href="https://localtags-web.vercel.app/" target="_blank">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Demo</span>
            </a>
            <a href="https://github.com/sravi4701/localtags" target="_blank" className="mx-2">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Source<span className="text-sm">(backend)</span></span>
            </a>
            <a href="https://github.com/sravi4701/localtags-web" target="_blank" className="mx-2">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Source<span className="text-sm">(frontend)</span></span>
            </a>
          </div>
        </div>
      </div>
      {/* AIInShow */}
      <div className="projects-container mt-4 px-2 md:px-0">
        <div className="border border-violet-300 bg-violet-50 rounded md:w-3/4 flex flex-col">
          <div className="flex justify-between p-2">
            <div className="font-medium">AIinShow</div>
            <div className="italic">2023</div>
          </div>
          <div className="p-2">A curated collection of AI tools to streamline accessibility and discovery.</div>
          <div className="px-2 text-gray-700">
            Next.js • React • Firebase
          </div>
          <div className="p-2">
            <a href="https://aiinshow.com/" target="_blank">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Demo</span>
            </a>
            <a href="https://github.com/sravi4701/aishow" target="_blank" className="mx-2">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Source</span>
            </a>
          </div>
        </div>
      </div>

      {/* Garagetroop */}
      <div className="projects-container mt-4 px-2 md:px-0">
        <div className="border border-violet-300 bg-violet-50 rounded md:w-3/4 flex flex-col">
          <div className="flex justify-between p-2">
            <div className="font-medium">GarageTroop</div>
            <div className="italic">2020</div>
          </div>
          <div className="p-2">Garagetroop aimed to connect car owners with garages for hassle-free services.</div>
          <div className="px-2 text-gray-700">
            Node.js • Express.js • Next.js • MongoDB • React
          </div>
          <div className="p-2">
            <a href="https://www.youtube.com/watch?v=1J0abp_WzNs&t=1s&ab_channel=GarageTroop" target="_blank">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Demo</span>
            </a>
            <a href="https://github.com/sravi4701/garage-troop-backend" target="_blank" className="mx-2">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Source<span className="text-sm">(backend)</span></span>
            </a>
            <a href="https://github.com/sravi4701/garage-troop-frontend" target="_blank" className="mx-2">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Source<span className="text-sm">(frontend)</span></span>
            </a>
          </div>
        </div>
      </div>
      {/* TweetMe */}
      <div className="projects-container mt-4 px-2 md:px-0">
        <div className="border border-violet-300 bg-violet-50 rounded md:w-3/4 flex flex-col">
          <div className="flex justify-between p-2">
            <div className="font-medium">TweetMe</div>
            <div className="italic">2018</div>
          </div>
          <div className="p-2">A social media website which resembles to Twitter</div>
          <div className="px-2 text-gray-700">
            Python • Javascript • Django
          </div>
          <div className="p-2">
            <a href="https://github.com/sravi4701/tweet-me" target="_blank" className="mx-2">
              <span className="bg-violet-500 text-white p-2 py-1 rounded-md">Source<span className="text-sm">(backend)</span></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
