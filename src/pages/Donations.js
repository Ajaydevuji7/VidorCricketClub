import React, { useEffect } from 'react';
import '../styles/Donations.css';

function Donations() {
useEffect(() => {
    document.title = "Donte | Vidor Cricket Club";
  }, []);

    useEffect(() => {
        const existingScript = document.getElementById('paypal-donation-sdk');

        if (existingScript) {
            renderPayPalButton();
            return;
        }

        // Create and append the PayPal SDK script
        const script = document.createElement('script');
        script.id = 'paypal-donation-sdk';
        script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
        script.charset = 'UTF-8';

        script.onload = () => {
            renderPayPalButton();
        };

        script.onerror = () => {
            console.error('Failed to load PayPal SDK.');
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup: remove the button content to avoid issues on re-renders
            const donateButtonContainer = document.getElementById('donate-button-container');
            if (donateButtonContainer) {
                donateButtonContainer.innerHTML = '';
            }
        };
    }, []);

    const renderPayPalButton = () => {
        try {
            if (window.PayPal && window.PayPal.Donation) {
                window.PayPal.Donation.Button({
                    env: 'production',
                    hosted_button_id: '8YVJ4PPZT73TU',
                    image: {
                        src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                        alt: 'Donate with PayPal',
                        title: 'Support us via PayPal!',
                    },
                }).render('#donate-button-container');
            } else {
                console.error('PayPal SDK is not available.');
            }
        } catch (error) {
            console.error('Error rendering PayPal Donation Button:', error);
        }
    };

    return (
        <div className="donations-container">
            <section className="donations-hero">
                <h1 className="donations-title">Support Our Cricket Club</h1>
                <p className="donations-description">
                    Your contributions make a difference. Thank you for helping us thrive!
                </p>
            </section>
            <section className="donations-action">
                    <div
                        id="donate-button-container"
                        className="donate-button-container"
                        aria-label="PayPal Donation Button"
                    ></div>
            </section>
        </div>
    );
}

export default Donations;