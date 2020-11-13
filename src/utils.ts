export function getPlatform(fqbn: string) {
    // https://arduino.github.io/arduino-cli/latest/platform-specification/#hardware-folders-structure
    const platform = fqbn.split(":", 2).join(":");
    return platform;
}

// https://arduino.github.io/arduino-cli/latest/sketch-specification/#metadata
export function getLibs(libs: Array<LibInfo>) {
    const libString = libs.map(lib => `${lib.name}%${lib.version}`).join();
    return libString;
}
