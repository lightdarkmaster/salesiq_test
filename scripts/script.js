const displayChat = () => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
        ready: function(fn) {
            if (document.readyState !== 'loading') {
                fn();
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }
    };
    const script = document.createElement('script');
    script.src = 'https://salesiq.zohopublic.com/widget?wc=siq21e41ed3314d52339322acd54166cd348f3b37e5c78fc51975d58e98549c98e8';
    script.defer = true;
    document.getElementById('zsiqscript').parentNode.appendChild(script);
}

 const showChat = () => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
        ready: function(fn) {
            if (document.readyState !== 'loading') {
                fn();
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }
    };
    const script = document.createElement('script');
    script.src = 'https://salesiq.zohopublic.com/widget?wc=siq21e41ed3314d52339322acd54166cd348f3b37e5c78fc51975d58e98549c98e8';
    script.defer = true;
    document.getElementById('zsiqscript').parentNode.appendChild(script);
}