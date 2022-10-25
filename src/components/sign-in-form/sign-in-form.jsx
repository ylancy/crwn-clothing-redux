import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/user/user-actions';
import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../untilities/firebase/firebase';
import InputForm from "../input-form/input-form";
import Button from "../button/button";
import './sign-in-form.scss'

const SignInForm = () => {
    const InitialForm = {
        email: "",
        password: "",
    }

    const [formFeild, setFormFeild] = useState(InitialForm);
    const { email, password } = formFeild;
    const dispatch = useDispatch();

    const onFormChange = (event) => {
        const { name, value } = event.target;
        setFormFeild({ ...formFeild, [name]: value });
    }

    const clearForm = () => {
        setFormFeild(InitialForm);
    }

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user)
            dispatch(setCurrentUser(user));
            clearForm();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        dispatch(setCurrentUser(user));
    }

    return (
        <div>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitForm}>
                <InputForm label='email' type='email' name="email" value={email} onChange={onFormChange} />
                <InputForm label='password' type='password' name="password" value={password} onChange={onFormChange} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form >
        </div >
    )
}

export default SignInForm;