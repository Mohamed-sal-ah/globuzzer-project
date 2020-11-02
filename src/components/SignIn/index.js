import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as STYLED from './style'



const SignInPage = () => (
    <SignInForm />
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        // submit sign in
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password).then(() => {
                this.setState({ ...INITIAL_STATE });
                // Delay for page transition
                const mainDom = document.getElementById("sign-in")
                mainDom.classList.remove("fade-enter-done")
                mainDom.classList.remove("fade-enter")
                mainDom.classList.add("fade-exit")
                mainDom.classList.add("fade-exit-active")
                setTimeout(() => {
                    this.props.history.push(ROUTES.NOTES_LIST);
                }, 1000)
            })
            .catch(error => {
                this.setState({ error });
                console.error(error.message);
            });
        event.preventDefault();
    };
    onChange = event => {
        // on change text
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <STYLED.FullMainPage className="page" id="sign-in">
                <STYLED.MainTitle>Sign In</STYLED.MainTitle>
                <STYLED.StyledForm onSubmit={this.onSubmit}>
                    <STYLED.StyledInput
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email"
                    />
                    <STYLED.StyledInput
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <STYLED.ButtonSpan>
                        <STYLED.SignUpLink to={ROUTES.SIGN_UP}>No Account</STYLED.SignUpLink>
                        <STYLED.SubmitButton disabled={isInvalid} type="submit">
                            Sign In
                        </STYLED.SubmitButton>
                    </STYLED.ButtonSpan>
                </STYLED.StyledForm>
                <STYLED.BackLink to={ROUTES.LANDING}>Back</STYLED.BackLink>

            </STYLED.FullMainPage>
        );
    }
}
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };