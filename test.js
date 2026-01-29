function main() {
    const argv = process.argv.slice(2);
    // console.log(argv);
    if (argv === 0) {
        // helpers.printUsage();
        return;
    }

    const command = argv[0];
    const args = argv.slice(1);
    

    switch (command) {
        case "sayHello":
            console.log(`Hello mister ${args[0]}, you are one clever ${args[1]}`)
            break;

        case "help":
        case "--help":
        case "-h":
            console.log("Lost? too bad.")
            break;

        default:
            console.error(`Error: Unknown command '${command}`);
            break;
    }
    
}

main();
