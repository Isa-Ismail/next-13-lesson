import React from 'react'

interface Props {
    params: {
        id: string
    }
}

const page: React.FC<Props> = ({ params }) => {

    const fn = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok')
        }, 1000)
    })
    fn().then((res) => {
        console.log(res)
    })

    return (
        <div>
            about {params.id}
        </div>
    )
}

export default page