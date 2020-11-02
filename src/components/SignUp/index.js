import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as STYLED from './style'

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const SignUpPage = () => (
    <SignUpForm />
)

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                const createdDate = this.props.firebase.serverValue.TIMESTAMP;
                const userID = authUser.user.uid;
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        createdDate,
                        userID
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                // Delay for page transition
                const mainDom = document.getElementById("sign-up")
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
    }
    onChange = event => {
        // on change text
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <STYLED.FullMainPage className="page" id="sign-up">
                <STYLED.MainTitle>Create Account</STYLED.MainTitle>
                <STYLED.StyledForm onSubmit={this.onSubmit}>
                    <STYLED.StyledInput
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Username"
                    />
                    <STYLED.StyledInput
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email"
                    />
                    <STYLED.StyledInput
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <STYLED.StyledInput
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <STYLED.ButtonSpan>
                        <STYLED.BackLink to={ROUTES.SIGN_IN}>Back</STYLED.BackLink>
                        <STYLED.SubmitButton disabled={isInvalid} type="submit">
                            Skapa Konto
                </STYLED.SubmitButton>
                    </STYLED.ButtonSpan>
                </STYLED.StyledForm>
            </STYLED.FullMainPage>
        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);


export default SignUpPage;