async function loginWithGoogle(credential) {
    try {
        const response = await fetch(`${BASE_URL}auth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ credential }),
            credentials: 'include'
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || 'Authentication failed');
        }

        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error during Google login:', error);
        throw error;
    }
} 