type ProfilePageProps = {
  params:Promise<{name:string}>;
}
export default async function ProfilePage({params}:ProfilePageProps){

const users = [
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    bio: "Frontend developer passionate about React, UI design, and creating user-friendly web experiences."
  },
  {
    id: 3,
    name: "Aarav Mehta",
    email: "aarav.mehta@gmail.com",
    bio: "Full-stack developer who enjoys building scalable applications using Node.js and MongoDB."
  },
  {
    id: 4,
    name: "Sneha Verma",
    email: "sneha.verma@gmail.com",
    bio: "UI/UX designer who loves creating clean interfaces and improving user experiences."
  },
  {
    id: 5,
    name: "Rahul",
    email: "rahul.singh@gmail.com",
    bio: "Backend developer interested in API development, databases, and system architecture."
  },
  {
    id: 6,
    name: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    bio: "Creative web developer exploring modern JavaScript frameworks and responsive design."
  },
  {
    id: 7,
    name: "Vikram Joshi",
    email: "vikram.joshi@gmail.com",
    bio: "Software engineer passionate about problem-solving, data structures, and clean code."
  },
  {
    id: 8,
    name: "Neha Kapoor",
    email: "neha.kapoor@gmail.com",
    bio: "Full-stack enthusiast learning cloud technologies and building practical web applications."
  },
  {
    id: 9,
    name: "Aditya Rawat",
    email: "aditya.rawat@gmail.com",
    bio: "JavaScript developer interested in open-source projects and interactive web applications."
  },
  {
    id: 10,
    name: "Kavya Mishra",
    email: "kavya.mishra@gmail.com",
    bio: "Frontend engineer who enjoys CSS animations, accessibility, and modern web design."
  },
  {
    id: 11,
    name: "Arjun Patel",
    email: "arjun.patel@gmail.com",
    bio: "Aspiring software developer exploring artificial intelligence and full-stack development."
  }
];
const pageParams = await params
// const  username = pageParams.name
const username = decodeURIComponent(pageParams.name);
console.log("Username:", username);
const user = users.find(user =>user.name.toLocaleLowerCase()===username.toLocaleLowerCase())
if(!user){
return(
  <div>
    <h1>User not found</h1>
    <p>The user with name "{username}" does not exist.</p>
  </div>
)
}
console.log("Found user:", user);

    return(
        <div>
            <h1>{user?.name}'s Profile Page
            </h1>
            <p>Email: {user?.email} </p>
            <p>Bio: {user?.bio} </p>
        </div>

    )
}