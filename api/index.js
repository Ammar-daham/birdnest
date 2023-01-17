const { response } = require('express')
const express = require('express')
const request = require('request')
const parser = require('xml2json')

const PORT = process.env.PORT || 4000

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next();
})

app.get('/drones', (req, res) => {
    request(
        {url: 'https://assignments.reaktor.com/birdnest/drones'},
        (error, response, body) => {
            if(error || response.statusCode !== 200) {
              return res.status(500).json({type: 'error', message: error.message})
            }

            let json = parser.toJson(body);
            //console.log("to json -> %s ", json)
        }
    )
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))



