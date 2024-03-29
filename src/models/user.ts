import { Activity } from "./activity"
import { Racket } from "./racket"
import { Statistics } from "./statistics"

export interface User {
    userId: number
    username: string
    password: string
    image?: string | null
    racket?: Racket | null
    statistics?: Statistics
    activities?: Activity[]
}
