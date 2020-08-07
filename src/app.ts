import express, { Request, Response, NextFunction } from "express"
import logger from "morgan"
import bodyParser from "body-parser"

const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger("dev"))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("big-data-project-backend")
})

app.post(
    "/api/analysis",
    async (req: Request, res: Response, next: NextFunction) => {
        // const pythonProcess = spawn('python3', [`${root}/word_cloud/classifier.py`])

        // pythonProcess.stdout.on('data', async (data: any) => {

        //     let temp = data.toString()
        //     let trash_id = temp.slice(0, 1)
        //     console.log(`trash : ${trash_id}`)

        //     return res.json({ trashId: trash_id })

        // })

        res.send("success")
    }
)

app.listen(8080, () => console.log("Server running"))
