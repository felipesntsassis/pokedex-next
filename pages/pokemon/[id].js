import React from 'react';

export default function Pokemon({ pokemon }) {
    console.log(pokemon);

    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="Imagem do Pokemon"></img>
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
    return {
        paths: [
            {
                params: {
                    id: '1',
                },
            },
            {
                params: {
                    id: '2',
                },
            },{
                params: {
                    id: '3',
                },
            },
        ],
        fallback: false
    }
};
