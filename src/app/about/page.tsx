import { githubUrl, linkedInUrl, twitterUrl } from '@/utils/constants'
import Link from 'next/link'

function About() {
  return (
    <main>
        <h1 className="font-medium text-3xl md:text-4xl p-2 md:p-0">About me</h1>
        <section className="flex flex-col p-2 md:p-0 md:flex-row md:text-lg">
        <div className="md:pr-4">
          <p className="mt-2">
            I&apos;m a software engineer with over 5 years of professional
            programming experience. I began my journey as a backend developer,
            transitioned to a full-stack developer, and now I&apos;m focusing
            more on backend development. I mainly enjoy working with{" "}
            <span className="technology">Python</span> and
            <span className="technology">Javascript</span>. In addition to the
            fundamentals of software engineering, I am well-versed in
            technologies such as <span className="technology">Django</span>,{" "}
            <span className="technology">React</span>,
            <span className="technology">Next.js</span>,
            <span className="technology">TailwindCSS</span>,{" "}
            <span className="technology">MySQL</span>,{" "}
            <span className="technology">Redis</span> and many more.
          </p>
        </div>
      </section>
      <section className="full-intro px-2 md:px-0 pt-8 md:text-lg">
        <p>
          I love reading and demystifying engineering blogs, understanding how
          complex systems are built by great organizations. You can explore my learnings in the {" "}
          <Link href="/posts" className="link">
            Blog
          </Link>{" "}
          section
        </p>
        <p className='mt-4'>Feel free to contact me by email <a className='font-medium text-lg' href="mailto:sravi4701@gmail.com">sravi4701@<span style={{display: 'none'}}>ignoreme-</span>gmail.com</a> to say hi!</p>
        <div className="mt-4">
          You can find me on{" "}
          <a className="link" href={linkedInUrl} target="_blank">
            LinkedIn
          </a>
          ,{" "}
          <a className="link" href={githubUrl} target="_blank">
            Github
          </a>
          ,{" "}
          <a className="link" href={twitterUrl} target="_blank">
            X(Twitter)
          </a>
        </div>
      </section>

      <section className="full-intro px-2 md:px-0 pt-8">
        <h1 className="font-medium text-3xl md:text-4xl">Skills & Tools</h1>
        <ul className="list-disc list-inside mt-2 px-2 md:text-lg">
          <li className=''><strong>Backend:</strong> Python, Django, Node.js, Go</li>
          <li className=''><strong>Frontend:</strong> HTML, CSS, Javascript, React, Next.js, TailwindCSS</li>
          <li className=''><strong>Database:</strong> SQL, MySQL, MongoDB, Redis</li>
          <li className=''><strong>Other tools:</strong> Docker, AWS, Git, Firebase, Playwright</li>
        </ul>
      </section>

      <section className="full-intro px-2 md:px-0 pt-8">
        <h1 className="font-medium text-3xl md:text-4xl">Engineering Blogs (Recommended)</h1>
        <ul className="list-disc list-inside mt-2 px-2 md:text-lg">
          <li><a className="underline underline-offset-2 font-medium" target="_blank" href="https://www.linkedin.com/blog/engineering">LinkedIn Engineering</a></li>
          <li><a className="underline underline-offset-2 font-medium" target="_blank" href="https://engineering.fb.com/tag/instagram/">Instagram Engineering</a></li>
          <li><a className="underline underline-offset-2 font-medium" target="_blank" href="https://www.uber.com/en-IN/blog/lucknow/engineering/">Uber Engineering</a></li>
          <li><a className="underline underline-offset-2 font-medium" target="_blank" href="https://medium.com/airbnb-engineering">Airbnb Engineering</a></li>
          <li><a className="underline underline-offset-2 font-medium" target="_blank" href="https://engineering.atspotify.com/">Spotify Engineering</a></li>
        </ul>
      </section>

      <section className="full-intro px-2 md:px-0 pt-8">
        <h1 className="font-medium text-3xl md:text-4xl">Books</h1>
        <ul className="list-disc list-inside mt-2 px-2 font-medium md:text-lg">
          <li className='underline underline-offset-2'><a target="_blank" href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299">Atomic Habits</a></li>
          <li className='underline underline-offset-2'><a target="_blank" href="https://www.amazon.in/Power-Unwavering-Focus-Lead-Title/dp/1804991481">The power of unwavering focus</a></li>
          <li className='underline underline-offset-2'><a target="_blank" href="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/">Rich Dad Poor Dad</a></li>
          <li className='underline underline-offset-2'><a target="_blank" href="https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268">The Psychology of money</a></li>
          <li className='underline underline-offset-2'><a target="_blank" href="https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085">Sapiens</a></li>
          <li className='underline underline-offset-2'><a target="_blank" href="https://www.amazon.in/Thinking-Fast-Penguin-Press-Non-Fiction/dp/0141033576">Thinking Fast and Slow</a></li>
          <li className='underline underline-offset-2'><a target="_blank" href="https://www.amazon.in/Deep-Work-Focused-Success-Distracted/dp/0349413681">Deep Work</a></li>
        </ul>
      </section>
    </main>
  )
}

export default About