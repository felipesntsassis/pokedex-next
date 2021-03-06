import Link from 'next/link';
import React from 'react';

export default function Pokemon({ pokemon }) {
    console.log(pokemon);

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="Imagem do Pokemon"></img>
            <nav>
                <Link href="/"> 
                    <a>Voltar para listagem completa</a>
                </Link>
            </nav>
        </div>
    );  
}

export async function getStaticProps({ params }) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }

            throw new Error('Deu problema!');
        })
        .then(data => {
            return data;
        });
    
    return {
        props: {
            pokemon
        },
    };
}

export async function getStaticPaths() {
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
        paths: pokemons.map(pokemon => ({
            params: {
                id: pokemon.entry_number.toString()
            }
        })),
        fallback: false
    }
};
