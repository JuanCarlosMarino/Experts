import React from 'react'
import ExpertRegister from '../components/ExpertRegister'
import { Stack } from 'react-bootstrap'

const Register = () => {
    return (
        <div>
            <Stack gap={2} className="col-md-5 mx-auto">
                <ExpertRegister/>
            </Stack>
        </div>
    )
}

export default Register
