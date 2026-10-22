"use client"
type User ={
    id:number;
    name:string;
    username:string;
}

import { useState } from "react";
export default function FilterUser({users}:{users:User[]}){

    const [searchTerm,setSearchTerm] = useState("");
    const filteredUsers = users.filter((user) =>{

        return  user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    });
    return (
        <div>
            <input type="text"
             placeholder="Search user by name" 
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)} 
            className="border border-gray-300 rounded px-2 py-1 mb-4"/>    
            {filteredUsers.map((user:User)=>{
                return(
                    <li key={user.id}>
                        {user.name}
                    </li>
                )
            })}
        </div>
        
    )
}