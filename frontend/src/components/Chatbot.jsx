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
      "avatarUrl": "https://i.imgur.com/puhoaWA.png",
      // "avatarUrl": "data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='200.000000pt' height='200.000000pt' viewBox='0 0 200.000000 200.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'%0Afill='%23000000' stroke='none'%3E%3C/g%3E%3C/svg%3E",
      // "stylesheet": "https://webchat-styler-css.botpress.app/prod/7628a1a3-ee7f-4e61-b866-b5a5da3ab909/v10766/style.css",
      // "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/738911fe-044f-4a76-813f-18e5171d477a/v71601/style.css",
      // "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/738911fe-044f-4a76-813f-18e5171d477a/v42297/style.css",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/738911fe-044f-4a76-813f-18e5171d477a/v49615/style.css",
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