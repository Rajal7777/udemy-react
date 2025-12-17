import reactImg from '../assets/config.png';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

 export default function Head () {
    const description = reactDescription[getRandomInt(3)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React course</h1>
            <p>
                {description} JavaScript library for building user interfaces.
            </p>
        </header>
    )
}
