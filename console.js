const consoleToJSON = () => {
    const obj = {};
    for (let i = 2; i < process.argv.length; i++) {
        const item = process.argv[i].split("=");
        obj[item[0]] = item[1] ? item[1] : false
    }
    return obj
};

console.log(consoleToJSON());
