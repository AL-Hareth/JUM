import { client } from "@/utils/sanity/client";
import TutorialCard from "./(components)/TutorialCard";

interface Tutorial {
  title: string;
  slug: { current: string };
  description: string;
};

export default async function StepOne() {
  const tutorials = await client.fetch(`*[_type == "tutorial"] | order(_createdAt asc)  {
    title,
    slug { current },
    description,
  }`);

  return (
    <div className="text-white min-h-screen bg-gray-900 px-20 py-10">
      <h1 className="text-5xl font-bold text-center py-4">Step One</h1>
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
        {tutorials.map((tutorial: Tutorial) => (
          <>
            <TutorialCard
              key={tutorial.slug.current}
              title={tutorial.title}
              description={tutorial.description}
              slug={tutorial.slug}
            />
          </>
        ))}
      </div>
    </div>
  );
}
