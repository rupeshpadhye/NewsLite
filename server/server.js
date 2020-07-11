import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import proxy from 'express-request-proxy'
import {API_KEY} from "@env"
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)


// router.use('/api/*', (req, res, next) => {
//   console.log(req.originalUrl)
//   proxy({
//     url: 'https://www.goodreads.com/' + '/*',
//     query: {
//       key: '78MvvU3PPhC0lqafV4QtbA'
//     },
//     timeout: 60000,
//     headers: {},
//   })(req, res, next);

// });

router.use('/api/*', (req, res, next) => {
  console.log(req.originalUrl, 'inside');
  proxy({
    url: 'http://newsapi.org/v2' + '/*',
    query: {
      apiKey: process.env.apiKey || API_KEY
    },
    timeout: 60000,
    headers: {}
  })(req, res, next);
});



app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
