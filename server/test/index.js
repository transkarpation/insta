const jwt = require('jsonwebtoken')

const test = async (payload) => {
    try {
        const userId = jwt.decode('eyJhbGciOiJIUzI1NiJ9.Mg.pRAqsKN2bEEX3nQBWKvbIpn5sdh5YT-q1rW3FH6tj68', 'keyboardcat')
        console.log('userId ', userId)
    } catch (e) {
        console.log('test e = ', e)
    }
}

test('slfjks')