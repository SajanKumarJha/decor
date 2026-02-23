import React, { FC } from "react";
import type { IconProps } from "@/types/Icon";
import { cx } from "@/helpers/class-prefix";

const Icon: FC<IconProps> = (props) => {
    const { size, name, ...svgProps } = props
    const svgSize = size?.startsWith("--") ? `var(${size})` : size ?? "16px"
    return (
        <svg
            style={{ width: svgSize, height: svgSize }}
            className={cx("icon")}
            role="img"
            aria-label={name}
            focusable="false"
            {...svgProps}
        >
            <use href={`/icon.svg#icon-${name}`} xlinkHref={`/icon.svg#icon-${name}`} />
        </svg>
    );
};

export default Icon;