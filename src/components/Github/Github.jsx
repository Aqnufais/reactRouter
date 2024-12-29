import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/aqnufais')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    // Check if data is available before accessing its properties
    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div className='text-3xl p-4 text-center'>Github Followers: {data.followers}</div>
    )
}

export default Github
