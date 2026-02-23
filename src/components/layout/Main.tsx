import React, { FC, ReactNode } from 'react'
import { cx } from '@/helpers/class-prefix'

interface Props {
    children: ReactNode
}
const Main: FC<Props> = ({ children }) => {
    return (
        <div className={cx("main")}>
            {children}
        </div >
    )
}

export default Main