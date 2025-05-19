import React, { useEffect } from 'react'

export function GoogleLogin({ onSuccess }) {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://accounts.google.com/gsi/client'
        script.async = true
        script.defer = true
        
        script.onload = () => {
            window.google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: handleGoogleResponse,
                auto_select: false,
                cancel_on_tap_outside: true
            });
            
            window.google.accounts.id.renderButton(
                document.getElementById('googleButton'),
                { theme: 'outline', size: 'large' }
            );
        }
        
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [onSuccess])

    return (
        <div className="google-login-container">
            <div id="googleButton"></div>
        </div>
    )
} 