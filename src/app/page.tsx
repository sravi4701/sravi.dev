import { formatDate, getBlogPosts } from "@/utils/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const profileImageSrc =
    "https://media.licdn.com/dms/image/C5103AQFyY2XkIKNS9A/profile-displayphoto-shrink_400_400/0/1520796154607?e=1711584000&v=beta&t=mOlktllvTnhryV37uH81td-3Mopl-2jYlDvU9ciHP7I";

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
          <h6 className="text-md md:text-lg">Software Engineer at <span className="font-medium">TripGuru</span></h6>
          <p className="mt-2">
            I&apos;m a software developer and a technical writer. I love working with
            open source technologies and writing about what I learn. I mainly
            enjoy working with Python and Javascript. Currently working as a
            software engineer at TripGuru among other stuff.
          </p>
        </div>
      </section>
      <section className="full-intro px-2 md:px-0 pt-8">
        I&apos;ve been writing online since 2017, mostly cross-platform mobile
        development and sometimes on web. I&apos;ve written over 150 articles and
        tutorials for more than 30 publications and organizations across the
        internet. Hence, I started this blog to share my software development
        journey.
      </section>

      <section className=" px-2 md:px-0 pt-8">
        <h1 className="font-medium text-2xl md:text-3xl">Latest Posts <Link className="link" href={'/posts'}>See All</Link></h1>
        <div className="flex flex-col">
        {posts.slice(0, 3).map(post => {
            return <Link key={post.slug} href={`/posts/${post.slug}`} className="py-4 px-2 mt-2 rounded flex flex-col md:flex-row justify-between bg-neutral-50">
              <div className="text-lg">{post.metadata.title}</div>
              <div>{formatDate(post.metadata.publishedAt)}</div>
            </Link>;
        })}
        </div>
      </section>
    </main>
  );
}
