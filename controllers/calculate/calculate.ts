import { Request, Response } from 'express';
import logger from "@logger"
import { calculateExpression } from './functions';
/**
 * This method is to calculate the result of a mathematical expression
 * @body has a property named "expression" with the mathematical expression to calculate
 * @return {json} json String
 */

const calculate = async (req: Request, res: Response) => {
    logger.verbose('[calculator, calculate]', 'Calculate the result of a mathematical expression ');
    let { expression } = req.body
    //remove all whitespace
    expression = expression.replace(/\s+/g, '');
    logger.warn(calculateExpression(expression))
    try {
        res.json({ result: calculateExpression(expression) });
    } catch (error) {
        logger.error('[calculator, calculate]', 'Get timeline list', error)
        res.json({ msg: "" });
    }

};


export default calculate;