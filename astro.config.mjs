// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'DocsHub',
        // Establece el inglés como el idioma predeterminado para este sitio.
        defaultLocale: 'es',
        locales: {
        // Documentación en inglés en `src/content/docs/en/`
        es: {
            label: 'Español',
        },
        'en': {
            label: 'English',
            lang: 'en'
        },},
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css',
        ],
        logo: {
            src: './src/assets/docshub-icon.svg',
        },
        social: {
            github: 'https://github.com/TTK-095/',
        },
        sidebar: [
            {
                label: '🌌 DocsHub', 
                items: [
                    { label: '🔥 Welcome', link: '/home/welcome/' },
            ],},
            {
                label: '📰 Web Dev',
                collapsed: true,
                items: [
                    {
                        label: 'Frontend',
                        items: [
                            {
                                label: 'HTML',
                                items: [
                                    { label: 'Basics', link: '/web-dev/frontend/html/ahtml-basics/' },
                                    { label: 'Advanced', link: '/web-dev/frontend/html/bhtml-advanced/' },
                            ],},
                            {
                                label: 'CSS',
                                items: [
                                    { label: 'Basics', link: '/web-dev/frontend/css/css-basics/' },
                                    { label: 'Intermediate', link: '/web-dev/frontend/css/css-intermediate/' },
                                    { label: 'Flexbox', link: '/web-dev/frontend/css/flexbox/' },
                                    { label: 'Grid', link: '/web-dev/frontend/css/grid/' },
                                    { label: 'Responsive design', link: '/web-dev/frontend/css/responsive-design/' },
                                    { label: 'Animations', link: '/web-dev/frontend/css/animations/' },
                                    { label: 'Advanced', link: '/web-dev/frontend/css/css-advanced/' },
                            ],},
                            {
                                label: 'JavaScript',
                                items: [
                                    { label: 'Basics', link: '/web-dev/frontend/javascript/js-basics/' },
                                    { label: 'Intermediate', link: '/web-dev/frontend/javascript/js-intermediate/' },
                                    { label: 'Advanced', link: '/web-dev/frontend/javascript/js-advanced/' },
                            ],},
                    ],},
                    {
                        label: 'Backend',
                        items: [
                            { label: '...', link: '/example/' },
                    ],},
                ],
            },
            {
            label: '🔰 IT Knowledge',
            collapsed: true,
            items: [
                {
                label: '🖥 Computers',
                items: [
                    { label: 'Operating Systems', link: '/example/' },
                    { label: 'Data Structures', link: '/example/' },
                    { label: 'Algorithms', link: '/' },
                    { label: 'Organization && Architecture', link: '/example/' },
                ],},
                {
                label: '🌐 Networking',
                items: [
                    { label: 'Puertos y Servicios', link: '/it-knw/computers/' },
                    { label: 'Direccionamiento IP', link: '/it-knw/networking/' },
                    { label: 'VLANs', link: '/it-knw/networking/' },
                ],},
                {
                label: '🛡 Security',
                items: [
                    { label: 'Criptografía', link: '/it-knw/computers/' },
                    { label: 'Ataques', link: 'it-knw/networking/' },
                    { label: 'IPS', link: '/it-knwnetworking/' },
                ],},
            ],
		},
		{
        label: '💠 Programming',
        collapsed: true,
        items: [
            { label: 'Git && GitHub', link: '/programming/git/' },
            { label: 'VS-Code', link: '/programming/vscode/' },
            {
                label: 'Scripting',
                items: [
                    { label: 'Python', link: '/programming/python/' },
            ],},
            {
                label: 'Software-Dev',
                items: [
                    { label: 'C', link: '/programming/c/' },
                    { label: 'Java', link: '/programming/java/' },
            ],},
        ],
		},
		{
        label: '🧮 Databases',
        collapsed: true,
        items: [
            {
                label: '🧩 Design DBs',
                items: [
                    { label: '...', link: '/example/' },
            ],},
            {
                label: '👨🏿‍💻 Programming DBs',
                items: [
                    { label: '...', link: '/example/' },
            ],},
            {
                label: 'Etc.',
                items: [
                    { label: '...', link: '/example/' },
            ],},
        ],
		},
            {
                label: '⛩ PENTESTING GENERAL',
                collapsed: true,
                items: [
                    { label: '...', link: '/example/' },
            ],},
            {
                label: '🧵 PENTESTING OS',
                collapsed: true,
                items: [
                    { label: '🐧 LINUX', link: '/example/' },
                    { label: '🍎 MACOS', link: '/example/' },
                    { label: '🪟 WINDOWS', link: '/example/' },
            ],},
            {
                label: '👽 NETWORK PENTESTING',
                collapsed: true,
                items: [
                    { label: '...', link: '/example/' },
            ],},
            {
                label: '🕸 PENTESTING WEB',
                collapsed: true,
                items: [
                    { label: '...', link: '/example/' },
            ],},
		{
        label: '🛡 Privacidad && OPSEC',
        collapsed: true,
        items: [
            {
                label: 'Example',
                items: [
                    { label: '...', link: '/example/' },
            ],},
        ],
		},
		{
        label: '🎭 OSINT && SOCIAL ENGINEER',
        collapsed: true,
        items: [
            {
                label: '🔎 OSINT',
                items: [
                    { label: '...', link: '/example/' },
            ],},
            {
                label: '👥 SOCIAL ENGINERR',
                items: [
                    { label: '...', link: '/example/' },
            ],},
        ],
		},{
        label: '🀄 Cheatsheets',
        collapsed: true,
        items: [
            {
                label: '🛠 Pentesting Tools',
                items: [
                    { label: 'Nmap', link: '/example/' },
                    { label: 'Wfuzz', link: '/example/' },
                    { label: 'Gobuster', link: '/example/' },
                    { label: 'fuff', link: '/example/' },
                    { label: 'Reverse Shell Prompts', link: '/example/' },
                ],},
            {
                label: '⚙ Programming Languages',
                items: [
                    { label: 'Python', link: '/example/' },
                    { label: 'C', link: '/example/' },
                    { label: 'Java', link: '/example/' },
                    { label: 'Bash', link: '/example/' },
                    { label: 'Batch', link: '/example/' },
                    { label: 'Powershell', link: '/cheatsheets/powershell-cheatsheet/' },
                ],
                
            },
		],},
		{
        label: 'COMING SOON...',
        collapsed: true,
        items: [
            { label: 'MALWARE DEVELOPMENT', link: '/example/' },
            { label: '📳 MOBILE PENTESTING', link: '/example/' },
            { label: 'PESTESTING WIRELESS', link: '/example/' },
            { label: 'PENTESTING CLOUD', link: '/example/' },
            { label: 'PENTESTING CI/CD', link: '/example/' },
            { label: 'PENTESTING IoT && HARDWARE', link: '/example/' },
            { label: 'BINARY EXPLOTATION', link: '/example/' },
            { label: 'REVERSE ENGINEER', link: '/example/' },
            { label: 'COMMAND & CONTROLS', link: '/example/' },
            { label: '🔮 CRYPTO Y STEGANOGRAPHY', link: '/example/' },

        ],
		},
		],
		}),],
});