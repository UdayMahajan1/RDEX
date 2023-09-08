import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Initialize the chatbot when the component mounts
    window.botpressWebChat.init({
      "composerPlaceholder": "Chat with RDEX",
      "botConversationDescription": "Your personal assistant for this platform",
      "botId": "9deac968-5408-4bcd-9914-c9b2c36a6e7a",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "9deac968-5408-4bcd-9914-c9b2c36a6e7a",
      "lazySocket": true,
      "botName": "RDEX",
      "avatarUrl": "https://s3-alpha-sig.figma.com/img/41f7/a3e8/c7ca04200ee90567e3a53564fe8ef4a3?Expires=1694390400&Signature=U2zg~DYkGPfgcYOTe6-egx0Fn-uc4jHGpr67CxUMYfLJ8DhGa-pD016attmB9Ydg2pIp6PyHahIOD~oCNU4jHZqooVFDPpwEC2HYjG4Uc~XAMJ-1xRZgt9joAC~rTzpO6Hfl02gm4fsuy1X4LQVj6GBq9QiJn6FNiHd54sLBTos1QLjMrHBUiWxFp70ohY-DFbcQJ8nnhgrGfmwCHiU3JJOIfBolxi0xvgTT7Z2H0DyQTsiEWTKAkQwuEL-iwU5ShizPGZ4bNHz6aPgbvPS~Bjyodge~ABxadc82WqvhqCto4itVR7qxTJuPkcC7n9OPi11Gnd3upzaXTb52hitstg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/7628a1a3-ee7f-4e61-b866-b5a5da3ab909/v10766/style.css",
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
