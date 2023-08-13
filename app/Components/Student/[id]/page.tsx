export default function StudentDetails({params}){
    console.log(params)
    return(
        <h1>Student Id {params.id}</h1>
    )
}