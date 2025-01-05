// // src/app/components/FacebookPixel.js
// import { useEffect } from "react";

// const FacebookPixel = () => {
//   useEffect(() => {
//     // Initialize Facebook Pixel
//     window.fbq = function () {
//       window.fbq.callMethod
//         ? window.fbq.callMethod.apply(window.fbq, arguments)
//         : window.fbq.queue.push(arguments);
//     };
//     if (!window._fbq) window._fbq = window.fbq;
//     window.fbq.push = window.fbq;
//     window.fbq.loaded = true;
//     window.fbq.version = "2.0";
//     window.fbq.queue = [];

//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://connect.facebook.net/en_US/fbevents.js";
//     document.head.appendChild(script);

//     window.fbq("init", "YOUR_PIXEL_ID"); // Replace with your Facebook Pixel ID
//     window.fbq("track", "PageView");

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <noscript>
//       <img
//         height="1"
//         width="1"
//         style={{ display: "none" }}
//         src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" // Replace with your Pixel ID
//       />
//     </noscript>
//   );
// };

// export default FacebookPixel;
