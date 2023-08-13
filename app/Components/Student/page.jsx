import Link from "next/link"

export default function Students(){
    const data = [
        {
            name:"asad",
            age:20,
            id:1
        },
        {
            name:"smit ",
            age:20,
            id:2
        }
    ]
    return(
        <>
        
        <h1>Student details</h1>
        {data.map((v,i)=>{
            return(
                <div className="border w-1/2 mx-auto mt-4 text-center text-red-500 border-green-900">
                    <Link href={`/Components/Student/${v.id}`}>

                    {v.name}
                    </Link>
                    </div>
            )
        })}
        </>
    )
}