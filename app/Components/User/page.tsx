import Link from "next/link"
export default function User() {
    return (
        <>
            <h1>User List </h1>
            <b>
                <Link href={"/Components/User/teachers"}>
                    Teacher
                </Link>
            </b>
            <br />
            <b> <Link href={"/Components/User/Students"}>
                    Student
                </Link> </b>
        </>
    )
}