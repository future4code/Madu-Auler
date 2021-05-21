export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push('/signup')
}

export const goToFeedPage = (history) => {
    history.push('/feed')
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}