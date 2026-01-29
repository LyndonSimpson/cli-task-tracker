## CLI-TASK-TRACKER

Project as described in the roadmap.sh projects list: [roadmap.sh link to project](https://roadmap.sh/projects/task-tracker)

## usage
```
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
```