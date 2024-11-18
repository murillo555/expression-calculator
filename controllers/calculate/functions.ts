/**
 *  I added some comments to better show my solution,
 *   I added some tests as well to make sure my solution was correct.
 */
export const calculateOperation = (a: number, b: number, operator: string): number => {
    switch (operator) {
        case '*': return a * b;
        case '/': return a / b;
        case '+': return a + b;
        case '-': return a - b;
        default: throw new Error(`Operador desconocido: ${operator}`);
    }
};
const resolveParentheses = (expr: string): string => {
    // Stack to store characters of the expression
    const stack: string[] = [];
    for (const char of expr) {
        if (char === ')') {
            let subExpr = '';
            // here I build a subexpression inside parentheses
            while (stack.length && stack[stack.length - 1] !== '(') {
                // Extract the current subexpression
                subExpr = stack.pop() + subExpr;
            }
            stack.pop(); // remove  '('

            //Evaluate the subexpression and push the result back into the stack
            stack.push(compute(subExpr).toString());
        } else {
            // Push each character into the stack
            stack.push(char);
        }
    }
    // In this step the expression processed without parentheses is returned
    return stack.join('');
};

// Function to resolve multiplications and divisions first
const applyMultiplicationDivision = (ops: string[], nums: number[]) => {
    while (ops.length && (ops[ops.length - 1] === '*' || ops[ops.length - 1] === '/')) {
        const op = ops.pop()!;
        const b = nums.pop()!;
        const a = nums.pop()!;
        // Apply the operation with higher
        nums.push(calculateOperation(a, b, op));
    }
};

const compute = (expr: string): number => {
    //Stack to store numbers in the expression
    const nums: number[] = [];
    //Stack to store operators
    const ops: string[] = [];
    let currentNum = '';
    // Iterate over each character of the expression
    for (let i = 0; i <= expr.length; i++) {
        // Get and store the current character
        const char = expr[i];
        // If the character is a number, build the full number
        if (!isNaN(Number(char))) {
            currentNum += char;
        } else if (char === '.' || i === expr.length) {
            nums.push(parseFloat(currentNum));
            currentNum = '';
            applyMultiplicationDivision(ops, nums);
            if (char) ops.push(char);
        } else {
            if (currentNum) {
                nums.push(parseFloat(currentNum));
                currentNum = '';
            }
            applyMultiplicationDivision(ops, nums);
            ops.push(char);
        }
    }

    //Resolve remaining additions and subtractions
    while (ops.length) {
        const op = ops.shift()!;
        const a = nums.shift()!;
        const b = nums.shift()!;
        nums.unshift(calculateOperation(a, b, op));
    }

    return nums[0];
};


export const calculateExpression = (expr: string): number => {
    //Resolve parentheses until none remain in the expression
    while (expr.includes('(')) {
        expr = resolveParentheses(expr);
    }
    //  Evaluate the remaining expression without parentheses
    return compute(expr);
};


