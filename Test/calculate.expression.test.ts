import { expect, test } from '@jest/globals';
test("Calculate a mathematical expression: 10 * (2 + 5) * 10", async () => {
    const { body: response } = await appTest
        .post('/calculator')
        .send({ expression: "10 * (2 + 5) * 10" })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(response.result).toEqual(700)
})


test("Calculate a mathematical expression: (1 + 3 * 4) - 5", async () => {
    const { body: response } = await appTest
        .post('/calculator')
        .send({ expression: "(1 + 3 * 4) - 5" })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(response.result).toEqual(8)
})

test("Calculate a mathematical expression: 10 * (2 + 5) / 2", async () => {
    const { body: response } = await appTest
        .post('/calculator')
        .send({ expression: "10 * (2 + 5) / 2" })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(response.result).toEqual(35)
})  