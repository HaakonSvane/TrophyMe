type PromiseStatus = "pending" | "success" | "error";
export function suspendablePromise<T>(promise: Promise<T>) {
    let status: PromiseStatus = "pending";
    let response: T;

    const suspender = promise.then(
        res => {
            status = "success";
            response = res;
        },
        err => {
            status = "error";
            response = err;
        },
    );

    const handler = (status: PromiseStatus): (() => T | never) => {
        switch (status) {
            case "pending":
                return () => {
                    throw suspender;
                };
            case "error":
                return () => {
                    throw response;
                };
            default:
                return () => response;
        }
    };

    const read = () => {
        const result = handler(status)();
        return result;
    };

    return { read };
}
