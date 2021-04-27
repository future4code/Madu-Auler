import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'

const PostPage = () => {
    useProtectedPage()
    return (
        <di>
            <h1>PostPage</h1>
        </di>
    )
}

export default PostPage;