import { githubUrl, linkedInUrl, profileImageSrc, twitterUrl } from "@/utils/constants";
import { formatDate, getBlogPosts } from "@/utils/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  let posts = getBlogPosts();
  // Sort the posts as required.
  posts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <main className="mt-4">
      <section className="flex flex-col p-2 md:p-0 md:flex-row">
        <Image
          className="rounded-full md:order-1 w-[150px] h-[150px]"
          src={profileImageSrc}
          alt="Profile Image"
          width="150"
          height="150"
        ></Image>
        <div className="md:pr-4">
          <h1 className="font-medium text-2xl md:text-4xl">
            Hey, I&apos;m Ravi Shankar 👋
          </h1>
          <h6 className="text-md md:text-lg">
            Software Engineer at <span className="font-medium">TripGuru</span>
          </h6>
          <p className="mt-2">
            I&apos;m a software engineer with over 5+ years of professional
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
      <section className="full-intro px-2 md:px-0 pt-8">
        <p>
          I love reading and demystifying engineering blogs, understanding how
          complex systems are built by great organizations. You can find my
          recommended resources in the{" "}
          <Link href="/about" className="link">
            About us
          </Link>{" "}
          section and some of my learnings in the {" "}
          <Link href="/posts" className="link">
            Blog
          </Link>{" "}
          section
        </p>
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

      <section className=" px-2 md:px-0 pt-8">
        <h1 className="font-medium text-2xl md:text-3xl">
          Latest Posts{" "}
          <Link className="link" href={"/posts"}>
            See All
          </Link>
        </h1>
        <div className="flex flex-col">
          {posts.slice(0, 3).map((post) => {
            return (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="py-4 px-2 mt-2 rounded flex flex-col md:flex-row justify-between bg-neutral-50"
              >
                <div className="text-lg">{post.metadata.title}</div>
                <div>{formatDate(post.metadata.publishedAt)}</div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
