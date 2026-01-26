// -------------
// helpers
// -------------

const helpers = {
   
    nowISO() {
        const timestamp = new Date().toISOString();
        return timestamp;
    },

    nextId(tasks) {
        if (tasks.length === 0) return 1;
        return Math.max(...tasks.map((t) => t.id)) +1;
    },

    findTaskIndex(tasks, id) {
        return tasks.findIndex((t) => t.id === id);
    },

    parseId(value) {
        const id = Number(value);
        if (!Number.isInteger(id)) {
            console.error("Error: Id must be a number");
            return null;
        }
        return id;
    },

    printTask(task) {
        console.log(
            `[${task.id} - ${task.status}] ${task.description}\n` +
            `created at: ${task.createdAt}\nupdated at: ${task.updatedAt}\n`
        )
    },

    printUsage() {
        console.log(`
    Task Tracker CLI (Node.js)

    Usage:
    node index.js add "Task description"
    node index.js update <id> "New description"
    node index.js delete <id>
    node index.js mark <id> <status>
    node index.js list
    node index.js list <status>

    Statuses:
    todo | in-progress | done

    Examples:
    node index.js add "Buy groceries"
    node index.js update 1 "Buy groceries and cook dinner"
    node index.js mark 1 in-progress
    node index.js mark 1 done
    node index.js list
    node index.js list done
        `.trim());
    },
}

export default helpers;
