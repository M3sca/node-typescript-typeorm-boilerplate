export function castToBoolean(value: string) {
    try {
        return Boolean(JSON.parse(value));
    } catch (error) {
        return false;
    }
}

export function castToInt(value: string) {
    return parseInt(value, 10);
}