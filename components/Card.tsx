type CardProps = {
    title:string;
    description:string
    
}
export default function Card({title,description}:CardProps){
    return(
        <div className="card p-4 rounnded w-fit bg-gray-950 ">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-sm">{description}</p>
        </div>
    ) 
}

