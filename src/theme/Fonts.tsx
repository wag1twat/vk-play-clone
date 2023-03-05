import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local("VK Sans"), local("VK Sans Display"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Light.woff2) format("woff2"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Light.woff) format("woff");
    }
    
    @font-face {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local("VK Sans"), local("VK Sans Display"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Regular.woff2) format("woff2"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Regular.woff) format("woff");
    }
    
    @font-face {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: local("VK Sans"), local("VK Sans Display"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Medium.woff2) format("woff2"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Medium.woff) format("woff");
    }
    
    @font-face {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local("VK Sans"), local("VK Sans Display"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-DemiBold.woff2) format("woff2"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-DemiBold.woff) format("woff");
    }
    
    @font-face {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local("VK Sans"), local("VK Sans Display"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Bold.woff2) format("woff2"),
      url(//vkplay.ru/hotbox/gem_static/leela/fonts/VK-Sans-Display-Bold.woff) format("woff");
    }`}
  />
)

export { Fonts }
