## CLI-TASK-TRACKER

Project as described in the roadmap.sh projects list: [roadmap.sh link to project](https://roadmap.sh/projects/task-tracker)

## usage
```json
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
```