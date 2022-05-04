import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

export default function Link({ href, children }) {
    console.log(children);

    return (
        <NextLink href={href} passHref>
            <a>
                {children}
            </a>
        </NextLink>
    );
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
