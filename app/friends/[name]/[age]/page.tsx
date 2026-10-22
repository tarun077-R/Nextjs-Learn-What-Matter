
type ProfilePageAge = {
  params: Promise<{ name: string; age: string }>;
};

export default async function ProfilePage({
  params,
}: ProfilePageAge) {
  const pageParams = await params;

  const username = pageParams.name;
  const userage = pageParams.age;

  const users = [
    {
      id: 1,
      name: "Rahul",
      age: 20,
      email: "rahul01@gmail.com",
      bio: "Frontend developer who enjoys building responsive websites and experimenting with modern CSS animations.",
    },
    {
      id: 2,
      name: "Rahul",
      age: 24,
      email: "rahul02@gmail.com",
      bio: "Full-stack developer focused on creating scalable applications with React, Node.js, and MongoDB.",
    },
    {
      id: 3,
      name: "Rahul",
      age: 22,
      email: "rahul03@gmail.com",
      bio: "UI/UX enthusiast passionate about accessible design, wireframing, and intuitive user experiences.",
    },
    {
      id: 4,
      name: "Rahul",
      age: 27,
      email: "rahul04@gmail.com",
      bio: "Backend developer interested in REST APIs, database optimization, and secure server architecture.",
    },
    {
      id: 5,
      name: "Rahul",
      age: 23,
      email: "rahul05@gmail.com",
      bio: "Web developer exploring Next.js, TypeScript, and techniques for improving website performance.",
    },
    {
      id: 6,
      name: "Rahul",
      age: 29,
      email: "rahul06@gmail.com",
      bio: "Software engineer who enjoys solving algorithmic problems and writing clean, maintainable code.",
    },
    {
      id: 7,
      name: "Rahul",
      age: 25,
      email: "rahul07@gmail.com",
      bio: "Cloud technology enthusiast learning Docker, deployment automation, and modern DevOps practices.",
    },
    {
      id: 8,
      name: "Rahul",
      age: 21,
      email: "rahul08@gmail.com",
      bio: "JavaScript developer interested in open-source projects and building interactive web experiences.",
    },
  ];

  const user = users.find(
    (user) =>
      user.name.toLowerCase() === username.toLowerCase() &&
      user.age === Number(userage)
  );

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <h1>{user.name}&apos;s Profile Page</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}
