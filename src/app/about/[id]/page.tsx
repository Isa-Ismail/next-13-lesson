import React from 'react'

interface Props {
    params: {
        id: string
    }
}

const page: React.FC<Props> = ({ params }) => {
    return (
        <div>
            about {params.id}
        </div>
    )
}

export default page