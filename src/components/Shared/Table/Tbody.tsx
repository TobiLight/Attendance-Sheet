import { UserInterface } from "../../Home"

type UserProps = UserInterface

function TableBody(user: UserProps): JSX.Element {

    const fullName = (firstname: string, lastname: string): string => {
        const fullname = firstname + ' ' + lastname
        return fullname
    }

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="">
                            <div className="text-sm font-medium text-gray-900">
                                {fullName(user.firstname, user.lastname)}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {user.time.signIn}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Sign out</a>
                </td>
            </tr>

        </tbody>
    )
}

export default TableBody