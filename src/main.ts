import core from "@actions/core";

try {
    // https://arduino.github.io/arduino-cli/latest/sketch-specification/#metadata
    const data = require(core.getInput("sketchjson"));

    core.setOutput("fqbn", data.cpu.fqbn);

    const platform = getPlatform(data.cpu.fqbn);
    core.setOutput("platform", platform);

    const included_libs = getLibs(data.included_libs);
    core.setOutput("included_libs", included_libs);

    core.setOutput("skipped", "false");
} catch (error) {
    core.setOutput("skipped", "true");
    core.setFailed(error.message);
}

function getPlatform(fqbn: string) {
    // https://arduino.github.io/arduino-cli/latest/platform-specification/#hardware-folders-structure
    const platform = fqbn.split(":", 2).join();
    return platform;
}

// https://arduino.github.io/arduino-cli/latest/sketch-specification/#metadata
function getLibs(libs: Array<LibInfo>) {
    const libString = libs.map(lib => `${lib.name}%${lib.version}`).join();
    return libString;
}
