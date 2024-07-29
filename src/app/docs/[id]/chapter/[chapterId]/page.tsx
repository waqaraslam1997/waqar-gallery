import React from 'react'

const ChapterId = ({ params }:
    {
        params: {
            id: string,
            chapterId: string,
        }
    }) => {
    return (
        <div>Chapter {params.chapterId} of Docs {params.id}</div>
    )
}

export default ChapterId