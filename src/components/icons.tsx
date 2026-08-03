import React from 'react';

type IconProps = { className?: string };

export const PythonIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Python</title>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM9.471 6.32c.575-1.15 1.553-1.84 3.018-1.84h3.634V1.8H9.923C5.619 1.8 3 4.52 3 9.07v3.633h4.634V7.82c0-.575.23-1.15.688-1.5zM14.529 17.68c-.575 1.15-1.553 1.84-3.018-1.84H7.877v2.68h3.634c4.305 0 7.152-2.72 7.152-7.27V9.297H14.53v5.183c0 .575-.23 1.15-.688 1.5v1.707z" fill="#3776AB" />
  </svg>
);

export const JavaIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Java</title>
    <path d="M12.44 2.4A2.5 2.5 0 0010.55 0H7.26a1 1 0 00-.7.3l-5.1 5.1a1 1 0 00-.3.7v3.29c0 .28.11.55.3.7l6.63 6.63a1 1 0 00.7.3h8.89a1 1 0 00.7-.3l5.1-5.1a1 1 0 00.3-.7V7.26a1 1 0 00-.3-.7L13.14 2.7a1 1 0 00-.7-.3zM6.6 20.37c.8-.8.8-1.59 0-2.4l-4-4c-.8-.8-.8-1.59 0-2.4l4-4c.8-.8.8-1.59 0-2.4l-4-4A2.5 2.5 0 000 3.3v17.4c0 .88.5 1.63 1.25 2.02l2.95 1.65a.5.5 0 00.7-.45V20.37z" fill="#007396" />
  </svg>
);

export const SqlIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>SQL</title>
    <path d="M5.53 3.3A9 9 0 004 9v6a9 9 0 001.53 5.7L4 22.23a1 1 0 001.74.87l1.7-1.12A9 9 0 0012 24a9 9 0 007.47-4.3l1.7 1.12a1 1 0 001.74-.87l-1.53-1.53A9 9 0 0020 15V9a9 9 0 00-1.53-5.7L20 1.77a1 1 0 00-1.74-.87l-1.7 1.12A9 9 0 0012 0a9 9 0 00-7.47 4.3L2.83.9a1 1 0 00-1.74.87l1.53 1.53zm5.94 1.2h1.06v15h-1.06zm-3.18 1.06h1.06v12.88h-1.06zm6.36 0h1.06v12.88h-1.06zM12 5.57c-2.76 0-5 1.57-5 3.5v6c0 1.93 2.24 3.5 5 3.5s5-1.57 5-3.5v-6c0-1.93-2.24-3.5-5-3.5z" fill="#F29111" />
  </svg>
);

export const CIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>C</title>
    <path d="M14.28.3A12 12 0 001.8 14.28 12 12 0 1014.28.3zm-2.02 18.23a6.83 6.83 0 01-5.5-3.18A6.83 6.83 0 0110.1 5.3a6.83 6.83 0 016.1 1.75 6.83 6.83 0 01-.58 9.57 6.83 6.83 0 01-7.4 1.91z" fill="#A8B9CC" />
  </svg>
);

export const CppIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>C++</title>
    <path d="M14.28.3A12 12 0 001.8 14.28a12 12 0 1012.48-13.98zM9.9 18.53a6.83 6.83 0 01-5.5-3.18 6.83 6.83 0 013.34-9.05 6.83 6.83 0 016.1 1.75 6.83 6.83 0 01-.58 9.57 6.83 6.83 0 01-3.36 1.91zm5.92-5.49h2.13v2.13h-2.13v2.13h-2.13v-2.13h-2.13v-2.13h2.13v-2.13h2.13v2.13zm2.13-2.13h2.13v2.13h-2.13v2.13h-2.13v-2.13h-2.13v-2.13h2.13V8.78h2.13v2.13z" fill="#00599C" />
  </svg>
);

export const RIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>R</title>
    <path d="M18.889 24H5.11C2.289 24 0 21.711 0 18.889V5.111C0 2.289 2.289 0 5.111 0h13.778C21.711 0 24 2.289 24 5.111v13.778C24 21.711 21.711 24 18.889 24zM11.11 8.889h3.333c1.222 0 2.222 1 2.222 2.222s-1 2.222-2.222 2.222h-1.111v2.222H11.11V8.889zm2.222 2.222h-1.111v-1.111h1.111c.611 0 1.111.5 1.111 1.111s-.5 1.111-1.111 1.111z" fill="#276DC3" />
  </svg>
);

export const JavaScriptIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>JavaScript</title>
    <path d="M0 0h24v24H0V0zm22.034 18.277c-.153-1.31-1.028-2.4-2.62-2.4-.84 0-1.4.385-1.803.974-.539.718-.77 1.666-.77 2.82 0 1.512.667 2.64 2.256 2.64 1.385 0 2.205-1.025 2.205-2.23 0-.308-.025-.513-.077-.718zm-4.743-1.513c0-1.872 1.41-3.154 3.333-3.154 1.41 0 2.385.744 2.82 1.821l-1.923.923c-.205-.513-.615-.846-1.128-.846-.846 0-1.41.64-1.41 1.666 0 .308.05.616.154.872H22.11v1.59h-4.949c.025.59.05.948.05 1.307 0 1.616-1.026 2.82-2.616 2.82-1.564 0-2.59-1.103-2.59-2.769 0-1.667.975-2.846 2.513-2.846.385 0 .744.077 1.05.205l.513-1.538c-.436-.18-.948-.282-1.59-.282-1.743 0-2.922 1.23-2.922 3.05 0 1.744 1.102 3.128 2.974 3.128 1.461 0 2.487-.795 2.897-1.948l1.923.949c-.64 1.744-2.128 2.718-4.82 2.718-2.949 0-4.923-1.974-4.923-5.077 0-3.077 2.026-4.948 4.82-4.948 1.154 0 2.23.41 3.026 1.128l-1.46 1.41c-.283-.307-.667-.487-1.129-.487-1.0 0-1.769.743-1.769 1.846z" fill="#F7DF1E"/>
  </svg>
);

export const TypeScriptIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>TypeScript</title>
    <path d="M1.5 0 h21 A 1.5 1.5 0 0 1 24 1.5 v21 A 1.5 1.5 0 0 1 22.5 24 h-21 A 1.5 1.5 0 0 1 0 22.5 v-21 A 1.5 1.5 0 0 1 1.5 0 Z M 12.6 13.12 H 9.9 V 11.4 H 14.7 V 13.12 H 12 V 20.1 H 10.5 V 13.12 Z M 10.96 8.16 c 0 -0.84 0.68 -1.52 1.52 -1.52 s 1.52 0.68 1.52 1.52 s -0.68 1.52 -1.52 1.52 s -1.52 -0.68 -1.52 -1.52 Z" fill="#3178C6" />
  </svg>
);

export const ReactIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>React</title>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-8c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.258-.67 2.366-1.666 2.955l-1.834.917-1.834-.917c-.996-.589-1.666-1.697-1.666-2.955zm7 0c0-.965-.394-1.84-1.026-2.474l-1.474-1.474c-.634-.634-1.51-.1026-2.474-1.026l-1.474-1.474c-.634-.634-1.51-.1026-2.474-1.026l-1.474-1.474c-.634-.634-1.51-.1026-2.474-1.026C5.84 8.394 5 9.47 5 10.5c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5z" fill="#61DAFB" />
  </svg>
);

export const PyTorchIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>PyTorch</title>
    <path d="M14.636.001a1.2 1.2 0 00-1.05.59L3.064 14.86a2.09 2.09 0 00-.01 1.99l.21.36c.03.04.05.08.08.12.3.4.73.73 1.21.92l-.01-.01.01.01 5.95 2.38c.6.24 1.27-.01 1.52-.6l10.51-18.2a1.2 1.2 0 00-.95-1.83zM9.366 23.998a1.2 1.2 0 001.05-.59l10.52-18.27a2.09 2.09 0 00.01-1.99l-.21-.36a2.06 2.06 0 00-1.29-.93l.01.01-5.95-2.38c-.6-.24-1.27.01-1.52.6L1.476 18.73a1.2 1.2 0 00.96 1.83z" fill="#EE4C2C" />
  </svg>
);

export const TensorFlowIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>TensorFlow</title>
    <path d="M12 0L1.72 6v12L12 24l10.28-6V6L12 0zm-1.8 19.2V4.8l7.2 4.2-7.2 10.2zm3.6 0l7.2-4.2V9l-7.2-4.2v14.4z" fill="#FF6F00" />
  </svg>
);

export const FastApiIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>FastAPI</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.667 17.653h-4V15.56h4c1.15 0 2.093-1.004 2.093-2.226s-.943-2.227-2.093-2.227h-4V8.44h4c1.15 0 2.093-1.004 2.093-2.227S12.483 4 11.333 4h-4V1.907h4c2.27 0 4.093 1.82 4.093 4.16s-1.823 4.16-4.093 4.16h-1.907v.666h1.907c2.27 0 4.093 1.82 4.093 4.16s-1.823 4.16-4.093 4.16h-4v-2.12z" fill="#009688" />
  </svg>
);

export const DockerIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Docker</title>
    <path d="M23.152 10.213L13.514.049C13.048-.124 12.55.07 12.3 1.18l-1.63 7.02h-4.8C3.17 8.2.3 9.77.017 10.38c-.28 2.37.49 4.06 2.13 4.6l.75-3.34h3.63v3.32h-3.6v3.42h3.6v3.42h-3.6l-.76-3.35c-1.64.53-2.4 2.22-2.12 4.59.28.61 3.16 2.18 5.86 2.18h4.8l1.63 7.01c.25 1.11.75 1.3 1.21.47l9.64-10.16c.8-.84.6-1.8-.85-2.5zM8.9 14.86H5.28v-3.32H8.9v3.32zm4.72 3.42H10.1v-3.42h3.52v3.42zm0-4.59H10.1v-3.32h3.52v3.32zm4.6-3.41h-3.52V6.95h3.52v3.33z" fill="#2496ED" />
  </svg>
);

export const GitIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Git</title>
    <path d="M23.36 10.312c-.13-.193-.52-.51-1.258-.616l-3.395-.49L15.34 6.22c-.225-.226-.45-.45-.675-.45-.225 0-.45.225-.675.45l-3.363 3.365v6.075c0 .338.135.675.337.878l2.25 2.25c.193.19.45.336.75.336.299 0 .556-.147.75-.337l2.25-2.25a1.12 1.12 0 00.337-.878v-4.5l2.138 2.138c.19.19.45.336.75.336.299 0 .556-.147.75-.337l2.25-2.25c.19-.19.336-.45.336-.75a1.13 1.13 0 00-.336-.75zm-10.425 4.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0-3.375a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0-3.375a.375.375 0 11-.75 0 .375.375 0 01.75 0zM17.062 0L6.938 10.125a2.25 2.25 0 101.594 3.844l.843-.844v-4.5a.375.375 0 11.75 0v4.5l.844.844a2.25 2.25 0 101.594-3.844L6.938 0h10.124z" fill="#F05032" />
  </svg>
);

export const AwsIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Amazon Web Services</title>
    <path d="M14.42.33a.6.6 0 0 0-.27.1L12 1.63a.6.6 0 0 0-.25.5v3.1c0 .24.16.45.39.54l1.8.7c.2.08.43-.02.53-.22L16.2 3.8a.6.6 0 0 0-.15-.65L14.7.43a.6.6 0 0 0-.28-.1zm-4.84 0a.6.6 0 0 0-.28.1l-1.35.72a.6.6 0 0 0-.15.65l1.73 2.95c.1.2.33.3.53.22l1.8-.7c.23-.09.39-.3.39-.54V2.13a.6.6 0 0 0-.25-.5L9.85.43a.6.6 0 0 0-.27-.1zm.55 6.45L2.1 4.52a.6.6 0 0 0-.64.12l-.9.9c-.18.18-.18.46 0 .64l3.1 3.1a.6.6 0 0 0 .64 0l.9-.9c.18-.18.18-.46 0-.64l-2.03-2.03.9-.9c.18-.18.46-.18.64 0l2.02 2.03-2.12 3.68c-.1.18-.04.42.13.54l3.85 2.5a.6.6 0 0 0 .6 0l3.86-2.5a.6.6 0 0 0 .12-.54L10.13 6.78zM21.9 4.52l-7.03 2.26.13.23c.18.3.55.4.85.24l7.1-2.3a.6.6 0 0 0 .35-1L22.4 3.4a.6.6 0 0 0-.7-.16l-1.07.28c.03-.05.04-.1.04-.16a.6.6 0 0 0-1.1-.42l-.4.68.22.06c.3.08.4.45.24.85l-1.3 2.27c-.16.28.02.64.32.7l1.3.3c.3.06.6-.1.66-.4l2.6-4.5c.08-.14.04-.32-.08-.42zm-12.24 9.1c-2.37.58-3.8 2.6-3.8 4.98s1.6 4.3 4.14 4.3c2.96 0 4.96-2.4 4.45-5.32a5.5 5.5 0 0 0-4.8-3.96zm-.43 7.26c-.9 0-1.55-.58-1.55-1.42s.65-1.42 1.55-1.42 1.55.58 1.55 1.42-.65 1.42-1.55 1.42zm11.77-1.42c0 2.4-1.6 4.3-4.14 4.3s-4.14-1.9-4.14-4.3 1.6-4.3 4.14-4.3 4.14 1.9 4.14 4.3zm-4.14-.02c-.9 0-1.55-.58-1.55-1.42s.65-1.42 1.55-1.42 1.55.58 1.55 1.42-.65 1.42-1.55 1.42z" fill="#FF9900"/>
</svg>
);

export const KerasIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Keras</title>
    <circle cx="12" cy="12" r="11.5" fill="none" stroke="#D00000" strokeWidth="1" />
    <path d="M6 4.8h2.1v7.2l5.4-6.5h2.6L11 11.6l5.4 7.6h-2.6l-4.2-6-1.5 1.7v4.3H6z" fill="#D00000" />
  </svg>
);

export const ScikitLearnIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>scikit-learn</title>
    <path d="M8.2 2.4A5.6 5.6 0 002.4 8.2c0 2 1 3.8 2.5 4.8a5.6 5.6 0 004 9.6 5.6 5.6 0 005.5-4.5 5.6 5.6 0 004.2-9.3 5.6 5.6 0 00-8.9-6.7A5.6 5.6 0 008.2 2.4zm.4 3.2a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8zm6.4 6.4a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z" fill="#F89939" />
    <circle cx="8.6" cy="8" r="1.6" fill="#29ABE2" />
    <circle cx="15" cy="14.4" r="1.6" fill="#29ABE2" />
  </svg>
);

export const OpenCvIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>OpenCV</title>
    <circle cx="7.5" cy="8" r="4.2" fill="none" stroke="#EE3F36" strokeWidth="2.4" />
    <circle cx="16.5" cy="8" r="4.2" fill="none" stroke="#68A63B" strokeWidth="2.4" />
    <circle cx="12" cy="16" r="4.2" fill="none" stroke="#1783C6" strokeWidth="2.4" />
  </svg>
);

export const YoloIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>YOLO Object Detection</title>
    <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#7C3AED" strokeWidth="1.4" />
    <rect x="5.5" y="7.5" width="7" height="6" rx="0.6" fill="none" stroke="#7C3AED" strokeWidth="1.4" />
    <circle cx="16.5" cy="13" r="2.4" fill="#7C3AED" />
  </svg>
);

export const LangChainIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LangChain</title>
    <circle cx="7" cy="7" r="4" fill="none" stroke="#1C3C34" strokeWidth="2.2" />
    <circle cx="17" cy="17" r="4" fill="none" stroke="#1C3C34" strokeWidth="2.2" />
    <path d="M9.8 9.8l4.4 4.4" stroke="#1C3C34" strokeWidth="2.2" fill="none" />
  </svg>
);

export const HuggingFaceIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Hugging Face</title>
    <circle cx="12" cy="12" r="10.5" fill="#FFD21E" />
    <circle cx="8.2" cy="10.2" r="1.4" fill="#000" />
    <circle cx="15.8" cy="10.2" r="1.4" fill="#000" />
    <path d="M7 14.2c1 1.7 2.9 2.8 5 2.8s4-1.1 5-2.8" stroke="#000" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <path d="M3.6 12.5c-.9.4-1.4 1.3-1.1 2.1.3.9 1.3 1.3 2.2 1" fill="none" stroke="#000" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M20.4 12.5c.9.4 1.4 1.3 1.1 2.1-.3.9-1.3 1.3-2.2 1" fill="none" stroke="#000" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

export const OpenAiIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>OpenAI</title>
    <path d="M12 2.2c1.3 0 2.5.5 3.4 1.4a4.7 4.7 0 013.9 2.3c.9 1.5 1 3.2.4 4.7.9.9 1.4 2.1 1.4 3.4s-.5 2.5-1.4 3.4c.6 1.5.5 3.2-.4 4.7a4.7 4.7 0 01-3.9 2.3c-.9.9-2.1 1.4-3.4 1.4s-2.5-.5-3.4-1.4a4.7 4.7 0 01-3.9-2.3c-.9-1.5-1-3.2-.4-4.7A4.8 4.8 0 013 12c0-1.3.5-2.5 1.4-3.4a4.7 4.7 0 01.4-4.7 4.7 4.7 0 013.9-2.3A4.7 4.7 0 0112 2.2zm-.9 4.1L7.3 8.6a.9.9 0 00-.4.7v4.9c0 .3.2.6.4.7l3.8 2.3c.3.2.6.2.9 0l3.8-2.3c.3-.1.5-.4.5-.7V9.3c0-.3-.2-.6-.5-.7l-3.8-2.3a.8.8 0 00-.9 0z" fill="currentColor" />
  </svg>
);

export const GeminiIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Google Gemini</title>
    <path d="M12 2c.6 4.4 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.6 8-8z" fill="url(#geminiGradient)" />
    <defs>
      <linearGradient id="geminiGradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4C8DF6" />
        <stop offset="0.5" stopColor="#9168C0" />
        <stop offset="1" stopColor="#F76B8A" />
      </linearGradient>
    </defs>
  </svg>
);

export const GroqIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Groq</title>
    <circle cx="12" cy="12" r="10.5" fill="#F55036" />
    <path d="M8 15.5V8.5h3.2a2.6 2.6 0 010 5.2H9.6l3 3.4" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NumpyIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>NumPy</title>
    <path d="M12 1.5l8.5 4.9v11.2L12 22.5l-8.5-4.9V6.4z" fill="none" stroke="#4D77CF" strokeWidth="1.4" />
    <path d="M7 8.5l5 3v6l-5-3zM17 8.5l-5 3v6l5-3z" fill="#4D77CF" />
  </svg>
);

export const PandasIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>pandas</title>
    <rect x="3" y="3" width="4" height="18" rx="1.5" fill="#150458" />
    <rect x="9" y="7" width="4" height="14" rx="1.5" fill="#150458" />
    <rect x="15" y="3" width="4" height="18" rx="1.5" fill="#E70488" />
    <circle cx="5" cy="6" r="1.1" fill="#fff" />
    <circle cx="11" cy="10" r="1.1" fill="#fff" />
    <circle cx="17" cy="6" r="1.1" fill="#fff" />
  </svg>
);

export const NextJsIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Next.js</title>
    <circle cx="12" cy="12" r="11.5" fill="#000" />
    <path d="M8.6 7.6v9h1.5v-6.7l6.4 8c.7-.1 1.4-.4 2-.7L9.9 6.9c-.4-.2-.9 0-1.3.7z" fill="#fff" />
    <rect x="14.7" y="7.6" width="1.5" height="7.2" fill="#fff" />
  </svg>
);

export const StreamlitIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Streamlit</title>
    <path d="M3 13.5l6-9 3 4.5 3-4.5 6 9-6 9-3-4.5-3 4.5z" fill="#FF4B4B" />
  </svg>
);

export const OracleIcon = ({ className }: IconProps) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Oracle</title>
    <rect x="1.5" y="7.5" width="21" height="9" rx="4.5" fill="none" stroke="#F80000" strokeWidth="2" />
  </svg>
);
