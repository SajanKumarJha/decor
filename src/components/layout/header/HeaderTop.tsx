import React from 'react'
import { cx } from '@/helpers/class-prefix';
import Icon from '../../icon/Icon';

const HeaderTop = () => {
    return (
        <div className={cx("header-top")} role="banner">

            <address className={cx("header-contact")}>
                <a href="tel:+919876543210">
                    +91 98765 43210
                </a>
                <a href="mailto:info@yourbrand.com">
                    <Icon name="at" size="30" aria-hidden />
                    info@yourbrand.com
                </a>
            </address>
        </div>
    );
};

export default HeaderTop
