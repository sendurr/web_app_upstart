const logger = {
    info: (args) => {
        global.console.log(args);
    },
    error: (args) => {
        global.console.error(args);
    },

};
export default logger;