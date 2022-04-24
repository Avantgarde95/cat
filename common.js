const links = [
    ['Cat 1', './cat1.html'],
    ['Cat 2', './cat2.html'],
    ['Cat 3', './cat3.html'],
    ['Code', 'https://github.com/Avantgarde95/cat']
];

const Footer = document.createElement('div');

Footer.style.marginTop = '1.5rem';

links.forEach(([label, url], index) => {
    const Link = document.createElement('a');

    Link.href = url;
    Link.innerHTML = label;
    Link.style.color = 'inherit';

    if (index !== 0) {
        Link.style.marginLeft = '0.5rem';
    }

    Footer.appendChild(Link);
});

const Target = document.querySelector('.app');

if (Target !== null) {
    Target.appendChild(Footer);
} else {
    document.body.appendChild(Footer);
}
