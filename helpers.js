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
    node tasks add "Task description"
    node tasks update <id> "New description"
    node tasks delete <id>
    node tasks mark <id> <status>
    node tasks list
    node tasks list <status>

    Statuses:
    todo | in-progress | done

    Examples:
    node tasks add "Buy groceries"
    node tasks update 1 "Buy groceries and cook dinner"
    node tasks mark 1 in-progress
    node tasks mark 1 done
    node tasks list
    node tasks list done
        `.trim());
    },
}

export default helpers;
