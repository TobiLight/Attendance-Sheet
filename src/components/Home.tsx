import { useState } from 'react'
import Form from './Attendance/Form'
import TableHead from "./Shared/Table/Thead"
import TableBody from "./Shared/Table/Tbody"
import moment from "moment"


export interface UserInterface {
    firstname: string,
    lastname: string,
    department: string,
    time: {
        signIn: string,
        signOut: string
    }
}

const initialUsers: UserInterface[] = [
    {
        firstname: 'John',
        lastname: 'Doe',
        department: 'Media',
        time: {
            signIn: moment().format("📅 YYYY-MM-DD ⌚ hh:mm:ssa"),
            signOut: 'ok'
        }
    },
    {
        firstname: 'Brad',
        lastname: 'Smith',
        department: 'IT',
        time: {
            signIn: moment().format("📅 YYYY-MM-DD ⌚ hh:mm:ssa"),
            signOut: 'ok'
        }
    },
]
function Home(): JSX.Element {
    const [users, setUser] = useState<UserInterface[]>(initialUsers)

    const renderUsers = () => {
        return users.map((user, index) => {
            return (
                <TableBody key={index} firstname={user.firstname} lastname={user.lastname} department={user.department} time={user.time} />
            )
        })
    }
    return (
        <div>
            <div className="w-3/4 max-h-64 overflow-y-scroll mx-auto mt-8 shadow overflow-x-scroll lg:overflow-x-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 min-h-64">
                    <TableHead />
                    {renderUsers()}
                </table>
            </div>
            <Form users={users} setUsers={setUser} />
        </div>

    )
}

export default Home