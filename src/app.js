import express from 'express';
import dotenv from 'dotenv';

import AuthMiddleware from './app/middlewares/auth';
import './database/index';

class App {
    constructor() {
        this.server = express();
        this.config();
        this.middlewares();
        this.routers();
    }

    config() {
        this.server.use(express.json());
        // this.server.use(cors());
        dotenv.config({
            path: process.env.NODE_ENV === 'test'
            ? '.env.test' : '.env',
        });

    }

    middlewares() {        
    }

    routers() {
        this.server.use(AuthMiddleware);
    }
}

export default new App().server;