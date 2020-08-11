const memojis = [];

for (let i = 1; i < 27; i++) {
    let memojisTwo = {};
    if (i < 10) {
        memojisTwo =
        {
            id: i,
            title: 'Memoji-0' + i,
            alt: 'Memoji-0' + i,
            src: process.env.PUBLIC_URL + '/images/memojiPack/Memoji-0' + i + '.png'
        }
        memojis.push(memojisTwo);
    } else {
       memojisTwo =
        {
            id: i,
            title: 'Memoji-' + i,
            alt: 'Memoji-' + i,
            src: process.env.PUBLIC_URL + '/images/memojiPack/Memoji-' + i + '.png'
        }
        memojis.push(memojisTwo);
    }
}

function memojiLoader() {
    return memojis;
}

export default memojiLoader;