const lib = require('./lib');

test('shoulld call console.log', () => {
    global.console = {log: jest.fn()}


    const msg = 'foo'
    lib.print(msg)

    expect(console.log).toBeCalled()
    expect(console.log.mock.calls).toEqual([[`[Print] ${msg}`]]);
});