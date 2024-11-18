
import superTest from 'supertest'
import Server from '../models/server'

const server = new Server()

declare global {
    namespace NodeJS {
        interface Global {
            appTest: import('supertest').SuperTest<import('supertest').Test>;
            serverTest: typeof Server
        }
    }
}

declare module global {
    let appTest: import('supertest').SuperTest<import('supertest').Test>;
    let serverTest: typeof server
}

beforeAll(async () => {
    global.serverTest = server
    //@ts-expect-error
    global.appTest = superTest(server.getApp())
})



