import React from 'react'
import { AuthUserContext, withAuthorization } from '../Session';
import NotesPage from './NotesPage';
const Notes = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <>
                {authUser !== 'loading' ?
                    <>
                        {authUser ? <>
                            <NotesPage authUser={authUser} />
                        </> : null}
                    </> :
                    null
                }

            </>

        )}
    </AuthUserContext.Consumer>
)

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Notes)