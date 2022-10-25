import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/user/user-actions';
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../untilities/firebase/firebase';
import InputForm from "../input-form/input-form";
import Button from "../button/button";
import './sign-up-form.scss'

const SignUpForm = () => {
    const InitialForm = {
        displayname: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const [formFeild, setFormFeild] = useState(InitialForm);
    const { displayname, email, password, confirmPassword } = formFeild;
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
        if (password !== confirmPassword) {
            alert('Passwords do not match!')
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayname })
            dispatch(setCurrentUser(user));
            clearForm();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already registered!')
                clearForm();
            } else {
                console.log('Error user creation', error);
                clearForm();
            }
        }
    }

    return (
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitForm}>
                <InputForm label='displayname' type='text' name="displayname" value={displayname} onChange={onFormChange} />
                <InputForm label='email' type='email' name="email" value={email} onChange={onFormChange} />
                <InputForm label='password' type='password' name="password" value={password} onChange={onFormChange} />
                <InputForm label='confirmPassword' type='password' name="confirmPassword" value={confirmPassword} onChange={onFormChange} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;