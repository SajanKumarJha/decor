import React from 'react'
import { SOCIAL_MENU } from '@/config/navigation.config'
import { cx } from '@/helpers/class-prefix'
import Link from 'next/link'
import Icon from '../icon/Icon'

const SocialMedia = () => {
    return (
        <div className={cx("social-media")}>
            <ul className={cx("social-list")}>
                {SOCIAL_MENU.map((item) => (
                    <li key={item.key}>
                        <Link
                            href={item.url}
                            aria-label={item.label}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <Icon name={item.icon} size="--ic-sm" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialMedia