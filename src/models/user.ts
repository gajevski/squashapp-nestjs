export interface User {
    userId: number
    username: string
    password: string
    image: string
    racket: Racket
    statistics: Statistics
    activities: Activity[]
}