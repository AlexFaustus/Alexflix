document.addEventListener('DOMContentLoaded', () => {
    const videoSections = {
        'front-end': 'front-end-videos',
        'back-end': 'back-end-videos',
        'mobile': 'mobile-videos'
    };

    const videos = {
        'front-end': [
            { title: 'O que faz uma desenvolvedora front-end?', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXHbh-Mc4kyDeSM0dZ5R74-p3GDun3b-LZw&s' },
            { title: 'Arvores Binarias', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXHbh-Mc4kyDeSM0dZ5R74-p3GDun3b-LZw&s' },
            { title: 'Implementando UX no Front-end', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3iBBIMdEI6jH-b59cKQUv4p4fr3JGaI7KA&s' }
        ],
        'back-end': [
            { title: 'O que estudar para ser backend developer?', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3iBBIMdEI6jH-b59cKQUv4p4fr3JGaI7KA&s' },
            { title: 'Github CLI', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3iBBIMdEI6jH-b59cKQUv4p4fr3JGaI7KA&s' },
            { title: 'Qual a melhor linguagem de programação?', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3iBBIMdEI6jH-b59cKQUv4p4fr3JGaI7KA&s' }
        ],
        'mobile': [
            { title: 'Desenvolvimento Android', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXHbh-Mc4kyDeSM0dZ5R74-p3GDun3b-LZw&s' },
            { title: 'The New React Native', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXHbh-Mc4kyDeSM0dZ5R74-p3GDun3b-LZw&s' },
            { title: 'Hello World', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXHbh-Mc4kyDeSM0dZ5R74-p3GDun3b-LZw&s' }
        ]
    };

    Object.keys(videoSections).forEach(section => {
        const container = document.getElementById(videoSections[section]);
        videos[section].forEach(video => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title} Thumbnail">
                <h4>${video.title}</h4>
            `;
            container.appendChild(card);
        });
    });
});
