import axios from "axios";

export function rateLimit(rate: number): void {
    console.log("Limiting requests to one every ", rate, "ms.");

    let lastInvocationTime: number | undefined = undefined;

    const scheduler = (config) => {
        const now = Date.now();
        if (lastInvocationTime) {
            lastInvocationTime += rate;
            const waitTime = lastInvocationTime - now;
            if (waitTime > 0) {
                return new Promise((resolve) => {
                    setTimeout(
                        () => resolve(config),
                        waitTime
                    );
                });
            }
        }

        lastInvocationTime = now;
        return config;
    }

    axios.interceptors.request.use(scheduler, Promise.reject);
}