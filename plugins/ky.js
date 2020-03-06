import ky from 'ky-universal';
export default ky.create({
    prefixUrl:'https://api.github.com',
    headers: {
        Authorization: 'token 4f72a1a773e32db6132f67ee9d4b512814ab8d16'
    }
})