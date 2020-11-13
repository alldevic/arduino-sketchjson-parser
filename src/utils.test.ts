import { getPlatform } from './utils';

test('correctFQBNgetPlatform', async () => {
    expect(getPlatform("arduino:samd:mkrgsm1400")).toBe("arduino:samd");
});

