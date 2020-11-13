'use strict';

import * as core from '@actions/core';
import * as fs from 'fs';
import { getPlatform, getLibs } from './utils';


function main() {
    try {
        // https://arduino.github.io/arduino-cli/latest/sketch-specification/#metadata
        const path = core.getInput("sketchjson")
        const file = fs.readFileSync(path, "utf-8");
        const data = JSON.parse(file);

        const fqbn = data.cpu.fqbn
        core.info(`FQBN: ${fqbn}`)
        core.setOutput("fqbn", fqbn);

        const platform = getPlatform(fqbn);
        core.info(`Platform: ${platform}`)
        core.setOutput("platform", platform);

        const included_libs = getLibs(data.included_libs);
        core.info(`Included libs: ${included_libs}`)
        core.setOutput("included_libs", included_libs);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main()
