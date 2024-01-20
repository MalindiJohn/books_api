const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {

    res.json([
        {
            "id": "1",
            "title":"Book Review: The Bear & The Nightingale AABC"
        },
        {
            "id":"2",
            "title":"Game review: Pokemon Brillian Diamond"
        },
        {
            "id":"3",
            "title":"Show Review: Alice in Bonderland"
        }
    ])
})

app.listen(4000, () => {
    console.log('Listening for request on port 4000 ....')
})