import core from "@actions/core";
import { getPlatform, getLibs } from './utils';

function main() {
    try {
        // https://arduino.github.io/arduino-cli/latest/sketch-specification/#metadata
        const data = require(core.getInput("sketchjson"));

        core.setOutput("fqbn", data.cpu.fqbn);

        const platform = getPlatform(data.cpu.fqbn);
        core.setOutput("platform", platform);

        const included_libs = getLibs(data.included_libs);
        core.setOutput("included_libs", included_libs);

        core.setOutput("skipped", false);
    } catch (error) {
        core.setOutput("skipped", true);
        core.setFailed(error.message);
    }
}

main()
