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
