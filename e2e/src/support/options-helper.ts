

const valueIsT = <T extends string>(value: string, options: readonly string[]): value is T => {
    return options.includes(value);
}

export const valueIsOfOption = <T extends string>(value: string, options: readonly string[]): T => {
    if(valueIsT(value, options)) {
        return value as T;
    }
    throw Error(`🧨 Value '${value}' needs to be one of ${options}`);
}