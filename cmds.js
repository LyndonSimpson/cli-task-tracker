// ------------
// commands
// ------------
import helpers from "./helpers.js"

const STATUSES_VALID = new Set(["todo", "in-progress", "done"]);

const commands = {

    cmdAdd(tasks, args) {
        if (args.length < 1) {
            console.error('Error: Description cannot be empty. \nUsage : add "Task Description"');
            return false;
        }

        const description = args.join(" ").trim();
        if (!description) {
            console.error("Error: description cannot be empty");
            return false;
        }

        const id = helpers.nextId(tasks);

        const timestamp = helpers.nowISO();

        tasks.push({
            id,
            description,
            status: "todo",
            createdAt: timestamp,
            updatedAt: timestamp,
        });

        console.log(`Tasks added (ID: ${id})`);
        return true;
    },

    cmdUpdate(tasks, args) {
        if (args.length < 2) {
            console.error("Error: Missing arguments \nUsage: update <id> <description>");
            return false;
        }

        const id = helpers.parseId(args[0]);
        if (id === null) return false;

        const newDescription = args.slice(1).join(" ").trim();
        if (!newDescription) {
            console.error("Error: Description cannot be empty");
            return false;
        }

        const idx = helpers.findTaskIndex(tasks, id);
        if (idx === -1) {
            console.error(`Error: Task withId ${id} not found.`);
            return false;
        }

        tasks[idx].description = newDescription;
        tasks[idx].updatedAt = helpers.nowISO();
        console.log(`Taks updated successfully (ID: ${id})`);
        return true;
    },

    cmdDelete(tasks, args) {
        if (args.length < 1) {
            console.error("Error: missing argument \nUsage: delete <id>");
            return false;
        }

        const id = helpers.parseId(args[0]);
        if (id === null) return false;

        const idx = helpers.findTaskIndex(tasks, id);
        if (idx === -1) {
            console.error(`Task with id ${id} not found.`);
            return false;
        }

        tasks.splice(idx, 1);
        console.log(`Task with id ${id} deleted successfully`);
        return true;
    },

    cmdMark(tasks, args) {
        if (args.length < 2) {
            console.error("Error : Arguments missing \nUsage: mark <id> <status>");
            return false;
        }

        const id = helpers.parseId(args[0]);
        if (id === null) return false;

        const status = args[1];
        if (!STATUSES_VALID.has(status)) {
            console.error(`Error: status ${status} does not exist. valid statuses are todo, in progress and done`);
            return false;
        }

        const idx = helpers.findTaskIndex(tasks, id);
        if (idx === -1) {
            console.error(`Error: task with id ${args[0]} not found`);
            return false;
        };

        tasks[idx].status = status;
        tasks[idx].updatedAt = helpers.nowISO();
        console.log(`status updated succesfully (ID: ${id})`);
        return true;
    },

    cmdList(tasks, args) {
        if (args.length === 0) {
            if (tasks.length === 0) {
                console.log("No tasks found.");
                return false;
            }
            tasks.forEach(helpers.printTask);
            return false;
        }

        const status = String(args[0]).toLowerCase();
        if (!STATUSES_VALID.has(status)) {
            console.error("Error: invalid status for list.");
            console.error("Valid statuse: todo | in-progress | done");
            return false;
        }

        const filtered = tasks.filter((t) => t.status === status);
        if (filtered.length === 0) {
            console.log(`No tasks found for status '${status}'.`);
            return false;
        }

        filtered.forEach(helpers.printTask);
        return false;
    },
}

export default commands;
