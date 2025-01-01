import { Request, Response, NextFunction } from 'express'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // console.log(err.status)
    // const statusCode: any = err.status ? err.status : 500;

    res.json({message : err.message, stack : err.stack});

    // switch (statusCode) {
    //     case '400': res.json({ title: "Bad Requires", message: err.message, stack: err.stack });
    //         break;
    //     case '401': res.json({ title: "Unauthorized", message: err.message, stack: err.stack });
    //         break;
    //     case '404': res.json({ title: "Not Found", message: err.message, stack: err.stack });
    //         break;
    //     case '404': res.json({ title: "Forbidden", message: err.message, stack: err.stack })
    //         break;
    //     case '500': res.json({ title: "Server Error", message: err.message, stack: err.stack })
    //         break;
    //     default: console.log("ok")
    // }
}