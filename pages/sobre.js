import React from 'react';
import Link from "next/link";

function Sobre() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    
                </li>
                <li>
                    <Link href="/sobre">
                        <a>Sobre o Projeto</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sobre;
