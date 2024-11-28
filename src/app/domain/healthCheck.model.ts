export interface IHealthCheck {
    status: number;
    body: {
        message: string;
    }
}