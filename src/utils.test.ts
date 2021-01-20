import { getPlatform, getLibs } from './utils';

test('correctFQBNgetPlatform', async () => {
    expect(getPlatform("arduino:samd:mkrgsm1400")).toBe("arduino:samd");
});

test('emptyLibraryList', async () => {
    const stub: LibInfo[] = [];
    expect(getLibs(stub)).toBe("");
});

test('emptyVersionOneLibrary', async () => {
    const stub: LibInfo[] = [{ name: "test", version: "" }];
    expect(getLibs(stub)).toBe("test");
});

test('fullOneLibrary', async () => {
    const stub: LibInfo[] = [{ name: "test", version: "v1" }];
    expect(getLibs(stub)).toBe("test@v1");
});

test('LibList', async () => {
    const stub: LibInfo[] = [
        { name: "test", version: "" },
        { name: "test1", version: "1" },
        { name: "test2", version: "" },
        { name: "test3", version: "v1.2.3" },
    ];
    expect(getLibs(stub)).toBe("test12,test1@1,test2,test3@v1.2.3");
});
