import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Initialize the chatbot when the component mounts
    window.botpressWebChat.init({
      "composerPlaceholder": "Chat with RDEX bot",
      "botConversationDescription": "Online",
      "botId": "9deac968-5408-4bcd-9914-c9b2c36a6e7a",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "9deac968-5408-4bcd-9914-c9b2c36a6e7a",
      "lazySocket": true,
      "botName": "RDEX bot",
      "avatarUrl": "https://s3-alpha-sig.figma.com/img/5111/e848/b9e13e2476f3c619e6c23a7d92276693?Expires=1694995200&Signature=BA0bcAfnpvf50BBbYqgVUjkO79KFOyMx--v1L0Gcp8n2EIGpU6qefHAOBOre8CMk0UUc1Rr5dwDSRLNY36SssThfqOu6I11VNxCPOdA3VH16MSmrE7Pz~gkWaSuqduV0CbLa7TOLQCoQ26yVvN0nGav42OU-zudGbZozcnZ3HbagceNTk7Dhe75YW8WAtq0VQdba4Ju8ToNmblGdRZUhpYvzzqB6bEGP~gRssMO9cDNHfmZyk-UJ5E3eO2qUp5R7WcoCdWyETTF246s8-kLGSwFWYyjzREWz8bjKxMojWo3tBxfGiz98ztP2S-U6-il-NvjUHt5EXR0NExhBsfI7rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      // "avatarUrl": "data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='200.000000pt' height='200.000000pt' viewBox='0 0 200.000000 200.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'%0Afill='%23000000' stroke='none'%3E%3C/g%3E%3C/svg%3E",
      // "stylesheet": "https://webchat-styler-css.botpress.app/prod/7628a1a3-ee7f-4e61-b866-b5a5da3ab909/v10766/style.css",
      // "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/738911fe-044f-4a76-813f-18e5171d477a/v71601/style.css",
      // "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/738911fe-044f-4a76-813f-18e5171d477a/v42297/style.css",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/738911fe-044f-4a76-813f-18e5171d477a/v22314/style.css",
      // "stylesheet": "https://webchat-styler-css.botpress.app/prod/58518d78-a0c1-4da7-a983-96249f16db5f/v92441/style.css",
      "useSessionStorage": true,
      "enableConversationDeletion": true
    });
    // Cleanup function (optional)
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className="chatbot-container">
    </div>
  );
};

export default Chatbot;


// background-image: url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='200.000000pt' height='200.000000pt' viewBox='0 0 200.000000 200.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'%0Afill='%23000000' stroke='none'%3E%3C/g%3E%3C/svg%3E");

// #dcdcdc #f5f5f5