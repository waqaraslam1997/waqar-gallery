import React from 'react'

const Product = ({ params }: {
    params: {
        slug: string[],
    }
}) => {
    if (params.slug.length === 2) {
        return (
            <div>product {params.slug[0]} of review {params.slug[1]}</div>
        )
    } else if (params.slug.length === 3) {
        return (
            <h1>product {params.slug[0]} review {params.slug[1]} of message {params.slug[2]}</h1>
        )
    }return (
        <h1>product {params.slug[0]}</h1>
    )
}

export default Product