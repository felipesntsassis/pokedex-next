import Link from 'next/link';
import React from 'react';

export async function getStaticProps(context) {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
        })
        .then(data => {
            return data.pokemon_entries;
        });
    
    return {
        props: {
            pokemons
        },
    };
}

export default function Home(props) {
    const { pokemons } = props;

    return (
        <div>
            Pókedex - Felipe Assis - NextJS Edition
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
                {pokemons.map((pokemon) => (
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        </div>
    );

}
