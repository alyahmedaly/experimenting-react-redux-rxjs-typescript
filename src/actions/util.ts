let typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T): T {
    if (typeCache[label as any]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }

    typeCache[label as any] = true;

    return label as T;
}