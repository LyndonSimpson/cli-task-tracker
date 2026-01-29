import fs from "node:fs";
import path from "node:path";
import helpers from "./helpers.js";
import commands from "./cmds.js";

const TASKS_FILE = path.join(process.cwd(), "tasks.json");
const VALID_STATUSES = new Set(['todo', 'in-progress', 'done']);

function saveTasks(tasks) {
    try {
        fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2), "utf-8");
    } catch (err) {
        console.error("Error writing tasks.json:", err.message);
    }
}

function loadTasks() {
    //creating file is not exists
    if (!fs.existsSync(TASKS_FILE)) {
        saveTasks([]);
        return [];
    }

    try {
        const raw = fs.readFileSync(TASKS_FILE, "utf-8");
        const data = JSON.parse(raw);

        if (!Array.isArray(data)) {
            console.error("Error: data is corrupted (expected an array)");
            return []
        }

        return data;
    } catch (error) {
        console.error("Error: unable to fetch data - expected JSON");
        return [];
    }
}

//" main router":
function main() {
    const argv = process.argv.slice(2);
    // console.log(argv);
    if (argv === 0) {
        // helpers.printUsage();
        return;
    }

    const command = argv[0];
    // console.log(command)
    const args = argv.slice(1);
    // console.log(args)

    const tasks = loadTasks();
    let changed = false;

    switch (command) {
        case "add":
            // console.log(`ARGS[0] --> ${args[0]} `);
            changed = commands.cmdAdd(tasks, args);
            break;

        case "update":
            changed = commands.cmdUpdate(tasks, args);
            break;

        case "delete":
            changed = commands.cmdDelete(tasks, args);
            break;

        case "mark":
            changed = commands.cmdMark(tasks, args);
            break;

        case "list":
            changed = commands.cmdList(tasks, args);
            break;

        case "help":
        case "--help":
        case "-h":
            helpers.printUsage();
            break;

        default:
            console.error(`Error: Unknown command '${command}'\n`);
            helpers.printUsage();
            break;
    }
    
    if (changed) {
        saveTasks(tasks);
    }
}

main();
