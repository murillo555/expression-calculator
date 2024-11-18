import { Application } from 'express'
import * as express from "express";
import cors from 'cors'
import logger from '@logger'
import calculatorRoutes from '../routes/calculatorRoute'

class Server {
    private app: Application;
    private port: string;
    private paths = {
        calculator: '/calculator',
    }

    constructor() {
        this.app = express.default();
        this.port = '8010';
        this.middlewares();
        //Routes
        this.routes();
    }


    getApp() {
        return this.app
    }

    middlewares() {
        //Cors
        this.app.use(cors());
        //Read 
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.calculator, calculatorRoutes)

    }

    listen() {
        this.app.listen(this.port, () => {
            logger.info('Listen at :', this.port);
        });
    }

}

export default Server