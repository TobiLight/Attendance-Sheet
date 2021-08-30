
const SignoutButton = (props: { signout: Function }) => {
    return (
        <div>
            <button className="text-purple-600 hover:text-purple-800" onClick={props.signout()}>Sign out</button>
        </div>
    )
}

export default SignoutButton