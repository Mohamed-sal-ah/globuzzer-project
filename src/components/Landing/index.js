import React from 'react'
import * as STYLED from './style'
import LandingIcon from '../../icons/landing.svg'
import { SIGN_IN } from '../../constants/routes'

const Landing = () => (
    <STYLED.FullMainPage className="page">
        <STYLED.MainTitle>Notes List With Firebase</STYLED.MainTitle>
        <STYLED.FlexArticles>
            <STYLED.LandingSection>
                <STYLED.LandingImg src={LandingIcon} />
            </STYLED.LandingSection>
            <STYLED.LandingSection>
                <STYLED.SectionTitle>Hello</STYLED.SectionTitle>
                <STYLED.SectionText>
                    Welcome to this a simple notes list app with data stored in firebase. To use it you need to create an account.
                </STYLED.SectionText>
                <STYLED.ButtonLink to={SIGN_IN}>Sign in</STYLED.ButtonLink>
            </STYLED.LandingSection>
        </STYLED.FlexArticles>
    </STYLED.FullMainPage>
)

export default Landing
