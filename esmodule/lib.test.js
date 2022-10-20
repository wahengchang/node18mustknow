import {jest} from '@jest/globals';
import lib from './lib.mjs'

test('shoulld call console.log', () => {
    global.console = {log: jest.fn()}


    const msg = 'foo'
    lib.print(msg)

    expect(console.log).toBeCalled()
    expect(console.log.mock.calls).toEqual([[`[Print] ${msg}`]]);
});