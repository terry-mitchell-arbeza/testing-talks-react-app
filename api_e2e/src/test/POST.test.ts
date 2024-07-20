import {expect, test} from '@playwright/test'

test('create user post', async ({request}) => {
    const response = await request.post('/posts', {
        data: {
            title: 'New Post',
            body: 'This is a new post',
            userId: 1
        }
    })

    expect(response.status()).toBe(201);
    expect(await response.json()).toEqual(expect.objectContaining({
        'title': 'New Post',
        'id': 101,
        'body': 'This is a new post',
        'userId': 1
    }))
})