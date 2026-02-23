import Main from '@/components/layout/Main'
import React, { FC, Fragment, ReactNode } from 'react'


interface Props {
    children: ReactNode
}
const PublicLayout: FC<Props> = ({ children }) => {
    return (
        <Fragment>
            <Main>
                {children}
            </Main>
        </Fragment>
    )
}

export default PublicLayout