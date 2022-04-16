const sayHelloSpec = require('./sayHello')

describe('Say Hello Test', () => {
  it('Sould say hello', () => {
    const response = sayHelloSpec.sayHello()
    expect(response).toBe('Hello World!')
  })

  it('Sould say Mari', () => {
    const response = sayHelloSpec.sayHello('Mari')
    expect(response).toBe('Hello Mari!')
  })
})
