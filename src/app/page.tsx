import { fetchAllPosts } from "@/utils/post";
import Image from "next/image";

export default async function Home() {
  const posts = await fetchAllPosts();
  console.log('posts', posts)
  const profileImageSrc =
    "https://media.licdn.com/dms/image/C5103AQFyY2XkIKNS9A/profile-displayphoto-shrink_400_400/0/1520796154607?e=1711584000&v=beta&t=mOlktllvTnhryV37uH81td-3Mopl-2jYlDvU9ciHP7I";
  return (
    <main className="">
      <section className="mt-2 flex flex-col md:flex-row">
        <Image
          className="rounded-full md:order-2"
          src={profileImageSrc}
          alt="Profile Image"
          width="150"
          height="150"
        ></Image>
        <div>
          <h1 className="font-medium text-2xl">
            👋 Hey, I&apos;m Ravi Shankar
          </h1>
          <h3 className="text-lg">Software Engineer at TripGuru</h3>
          <p className="mt-2">
            I&apos;m a software developer and a technical writer. I love working with
            open source technologies and writing about what I learn. I mainly
            enjoy working with Python and Javascript. Currently working as a
            software engineer at TripGuru among other stuff.
          </p>
        </div>
      </section>
      <section className="full-intro pt-8">
        I&apos;ve been writing online since 2017, mostly cross-platform mobile
        development and sometimes on web. I&apos;ve written over 150 articles and
        tutorials for more than 30 publications and organizations across the
        internet. Hence, I started this blog to share my software development
        journey.
      </section>

      <section>
        Latest posts:
        {posts.map(post => {
          return <div key={post.title}>{post.title}</div>
        })}
      </section>
    </main>
  );
}
