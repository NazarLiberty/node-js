export const getArgs = (argv) => {
    const res = {};
    const [executer, file, ...rest] = argv;

    rest.forEach((value, idx, array) => {
        if (value.charAt(0) === "-") {
            if (idx == array.length - 1) {
                res[value.slice(1)] = true
            } else if (array[idx + 1].charAt(0) !== "-") {
                res[value.slice(1)] = array[idx + 1]
            } else {
                res[value.slice(1)] = true
            }
        }
    });

    return res;
};