import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import './signin.scss'

const SignIn = () => {
    return (
        <div className="sign-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn;