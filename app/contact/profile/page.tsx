import FilterUser from "@/components/FilterUser";
export default async function profile(){

        const response =await fetch("http://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return (
        <main>
            <h1>Tarun Rawat</h1>
             <FilterUser users={users}/>
        </main>
    )
} 