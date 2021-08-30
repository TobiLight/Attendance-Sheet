import React, { useState, SetStateAction } from "react"
import { UserInterface } from "../Home"
import moment from "moment"

interface Props {
    users: UserInterface[]
    setUsers: React.Dispatch<SetStateAction<UserInterface[]>>
}

const Form: React.VFC<Props> = ({ users, setUsers }) => {
    const [input, setInput] = useState<UserInterface>({
        firstname: "",
        lastname: "",
        department: "",
        time: {
            signIn: "",
            signOut: ""
        }
    })
    const [error, setError] = useState("")
    const [time, setTime] = useState("")


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setError("")
        setInput({ ...input, [event.currentTarget.name]: event.currentTarget.value })
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (!input.firstname || !input.lastname || !input.department || !input.time || !time) {
            setError("You need to fill in all the fields")
            return
        }



        setUsers([...users, {
            firstname: input.firstname,
            lastname: input.lastname,
            department: input.department,
            time: {
                signIn: time,
                signOut: ""
            }
        }])
        setInput({
            firstname: "", lastname: "", department: "", time: {
                signIn: "",
                signOut: ""
            }
        })
        setTime("")
    }

    const logTime = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (!time) {
            setTime(moment().format("📅 YYYY-MM-DD ⌚ hh:mm:ssa"))
        }
    }

    return (
        <div className="Form-wrapper sm:w-2/3 md:w-2/3">
            <form className="m-6">
                <div className="flex justify-between">
                    <div className="flex mb-5 w-full mr-6">
                        <label className="w-full flex flex-col font-semibold" htmlFor="firstname">Firstname
                            <input value={input.firstname} onChange={handleChange} className="w-full focus:outline-none p-3 rounded-sm text-gray-700 border border-gray-400" type="text" name="firstname" id="firstname" placeholder="Enter your first name" />
                        </label>
                    </div>
                    <div className="flex mb-5 w-full">
                        <label className="w-full flex flex-col font-semibold" htmlFor="lastname">Lastname
                            <input value={input.lastname} onChange={handleChange} className="w-full focus:outline-none p-3 rounded-sm text-gray-700 border border-gray-400" type="text" name="lastname" id="lastname" placeholder="Enter your last name" />
                        </label>
                    </div>
                </div>

                <div className="flex mb-5">
                    <label className="w-full flex flex-col font-semibold" htmlFor="department">Department
                        <input value={input.department} onChange={handleChange} className="w-full focus:outline-none p-3 rounded-sm text-gray-700 border border-gray-400" type="text" name="department" id="department" placeholder="Enter your department" />
                    </label>
                </div>
                <div className="flex">
                    <label className="flex" htmlFor="time">
                        <button type="button" className="focus:outline-none p-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600" onClick={logTime}>Set current time</button>
                        <p className="font-semibold text-sm ml-4 self-center">{time}</p>
                    </label>
                </div>

                <div className="button mt-4">
                    <button onClick={handleSubmit} className="font-bold bg-purple-600 py-2 rounded-sm shadow-md hover:bg-purple-700 text-gray-200 w-full">Sign in</button>
                </div>

                <p className="text-red-600 font-semibold">{error}</p>
            </form>
        </div>
    )
}

export default Form