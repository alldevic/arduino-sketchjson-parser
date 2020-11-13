import core from "@actions/core";

try {
    const file = core.getInput("sketchjson");
    console.log(`Selected file: ${file}`);
} catch (error) {
    core.setFailed(error.message);
}
