import ky from 'ky-universal';
export default ky.create({
    prefixUrl:'https://api.github.com',
    headers: {
        Authorization: 'token c7f5eb0f2725a2ec05bff3b80202b6e7d5f8d67c'
    }
})