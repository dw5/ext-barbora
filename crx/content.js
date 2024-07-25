(function() {
    'use strict';

    function modifyUrl() {
        let url = new URL(window.location.href);

        // Exclude cdn.barbora.lt, URLs ending with a file extension, and specific paths
        const excludedSubdomain = 'cdn.barbora.lt';
        const fileExtensionPattern = /\.[^\/]+$/;
        const excludedPaths = [
            '/produktai/',
            '/atsiskaitymas/',
            '/krepselis/',
            '/'
        ];

        // Check for excluded subdomain
        if (url.hostname === excludedSubdomain) {
            return;
        }

        // Check for URLs ending with a file extension
        if (fileExtensionPattern.test(url.pathname)) {
            return;
        }

        // Check for specific excluded paths
        if (excludedPaths.includes(url.pathname)) {
            return;
        }

        // Check if the "order" parameter is present
        if (!url.searchParams.has('order')) {
            // Add the "order" parameter with the value "priceAsc"
            url.searchParams.append('order', 'priceAsc');

            // Redirect to the modified URL
            window.location.href = url.href;
        }
    }

    // Run the function to modify the URL
    modifyUrl();

    // Observe for changes in the URL to handle single page applications
    const observer = new MutationObserver(modifyUrl);
    observer.observe(document, { subtree: true, childList: true });
})();
