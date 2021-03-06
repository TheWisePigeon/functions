import * as functions from 'firebase-functions'

import * as admin from 'firebase-admin'
admin.initializeApp()

import * as express from 'express'

import * as cors from "cors"


const app = express()
app.use(cors({ origin: true }))

app.get('/cat', (req, res)=>{
    res.send('CAT')
})


app.get('/dog', (req, res)=>{
    res.send('DOG')
})

export const api = functions.https.onRequest(app)