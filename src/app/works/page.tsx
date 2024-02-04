import React from "react";

function Works() {
  return (
    <main>
      <h1 className="text-3xl md:text-4xl font-medium px-2 md:px-0">
        Work Experience
      </h1>
      {/* Tripguru */}
      <div className="px-2 md:px-0">
        <div className="mt-4 text-2xl">Full Stack Developer</div>
        <div className="mt-2">
          <a className="font-bold link" href="https://thetripguru.com">
            Tripguru
          </a>{" "}
          — <span className="italic">March 2021 - present</span>
        </div>
        <div className="mt-2">
          <span>Python, </span>
          <span>Javascript, </span>
          <span>Django, </span>
          <span>React.js, </span>
          <span>Next.js, </span>
          <span>Mysql, </span>
          <span>AWS</span>
        </div>
        <ul className="mt-2 list-disc list-inside">
          <li className="">
            Revamped and maintained the customer-facing website for the tour
            booking platform, enhancing user experience and functionality.
          </li>
          <li className="mt-2">
            Developed and implemented internal admin tools, such as Entity
            Report generation and Activity Tracker, streamlining operations for
            the Operations and Business Development teams.
          </li>
          <li className="mt-2">
            Led the development of various business products from scratch,
            including last-minute booking systems and features like OTA API
            integration (GetYourGuide), Coupon systems, and Emails integration
            using Sparkpost. Additionally, contributed to backend API
            refactoring and speed optimization, establishing best practices like
            PR review and testing processes for the team.
          </li>
        </ul>
      </div>
      <hr className="my-4" />
      {/* Vogo */}
      <div className="px-2 md:px-0">
        <div className="mt-4 text-2xl">Full Stack Developer</div>
        <div className="mt-2">
          <a
            className="font-bold link"
            href="https://www.linkedin.com/company/vogo-rentals/?originalSubdomain=in"
          >
            Vogo
          </a>{" "}
          — <span className="italic">Oct 2019 - March 2021</span>
        </div>
        <div className="mt-2">
          <span>Python, </span>
          <span>Javascript, </span>
          <span>React.js, </span>
          <span>Django, </span>
          <span>Mysql, </span>
        </div>
        <ul className="mt-2 list-disc list-inside">
          <li className="">
            Developed features for the fleet side app as a backend team member
            before transitioning to the frontend team, where I played a key role
            in building features, including payment integrations. Contributed
            significantly to the development of Vogo&apos;s core product, Vogo
            Keep, a long-term rental solution with user-friendly packages.
          </li>
          <li className="mt-2">
            Contributed to the development of a centralized frontend Progressive
            Web App (PWA) using React, ensuring uniformity across Android, iOS,
            and web platforms. Implemented effective communication through
            WebView in Android and iOS.{" "}
          </li>
          <li className="mt-2">
            Mentored junior developers and interns while actively participating
            in backend projects like Asset Tracking and Kickstart feature for
            the fleet side. On the frontend, led projects including payment
            integrations, user onboarding features (KYC), and various ad hoc
            functionalities like past bookings lists and Vogo Bounty Hunter.
          </li>
        </ul>
      </div>
      <hr className="my-4" />
      {/* Manch */}
      <div className="px-2 md:px-0">
        <div className="mt-4 text-2xl">Software Engineer</div>
        <div className="mt-2">
          <a
            className="font-bold link"
            href="https://www.techcircle.in/2020/02/05/is-stellaris-backed-vernacular-content-platform-manch-shutting-shop"
          >
            Manch
          </a>{" "}
          — <span className="italic">Nov 2018 - Sept 2019</span>
        </div>
        <div className="mt-2">
          <span>Javascript, </span>
          <span>Node.js, </span>
          <span>React.js, </span>
          <span>Next.js, </span>
          <span>MongoDB, </span>
          <span>Go</span>
        </div>
        <ul className="mt-2 list-disc list-inside">
          <li className="">
            As the first developer at Manch, played a pivotal role in developing
            a highly consumable API in Express.js for the application,
            contributing to its foundational development.
          </li>
          <li className="mt-2">
            Engineered and scaled a notification microservice in Golang from
            scratch, successfully handling 50K active users, showcasing
            proficiency in backend technologies.
          </li>
          <li className="mt-2">
            Developed the complete Manch website and internal dashboard,
            utilizing various technologies including MERN stack, Golang, and
            Elasticsearch. Took ownership of servers and deployments, ensuring
            smooth operations.{" "}
          </li>
        </ul>
      </div>
      <hr className="my-4" />
      {/* Datapeace */}
      <div className="px-2 md:px-0">
        <div className="mt-4 text-2xl">Backend Developer</div>
        <div className="mt-2">
          <a className="font-bold link" href="https://www.datapeace.in/">
            Datapeace
          </a>{" "}
          — <span className="italic">Nov 2018 - Sept 2019</span>
          <span className="italic">April 2018 - Oct 2018</span>
        </div>
        <div className="mt-2">
          <span>Python, </span>
          <span>Django, </span>
          <span>Node.js, </span>
          <span>MySQL</span>
        </div>
        <ul className="mt-2 list-disc list-inside">
          <li className="">
            Designed and developed RESTful APIs for the initial version of
            1UpVision using Django, showcasing expertise in backend development.
          </li>
          <li className="mt-2">
            Acquired proficiency in core AWS services, integrating them
            seamlessly with the 1UpVision product. Additionally, provided
            developer support for a client project, demonstrating versatility in
            addressing project needs.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Works;
