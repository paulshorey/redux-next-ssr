import React from 'react';
import Link from 'next/link';
import {NextPage} from 'next';

const Error: NextPage = () => {
    return (
        <>
            <p>Error</p>
            <nav>
                <Link href="/">Navigate to index</Link>
            </nav>
        </>
    );
};

export default Error;
