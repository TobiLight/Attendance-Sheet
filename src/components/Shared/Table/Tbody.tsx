import React, { useState, SetStateAction } from "react"
import { UserInterface } from "../../Home"
import SignoutButton from "../Signout"
import moment from "moment"


type Props = UserInterface


const TableBody: React.VFC<UserInterface> = (props: Props) => {
    const fullName = (firstname: string, lastname: string): string => {
        const fullname = firstname + ' ' + lastname
        return fullname
    }

    const [signout, setSignOut] = useState("")
    const signuserout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (!signout) {
            setSignOut(moment().format("📅 YYYY-MM-DD ⌚ hh:mm:ssa"))
        }
    }

    props.time.signOut = signout
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="">
                            <div className="text-sm font-medium text-gray-900">
                                {fullName(props.firstname, props.lastname)}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{props.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {props.time.signIn}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {signout !== "" ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">{signout}</span> : <SignoutButton signout={() => signuserout} />}
                </td>
            </tr>
        </tbody>
    )
}

export default TableBody