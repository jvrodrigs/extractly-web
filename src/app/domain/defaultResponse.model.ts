export interface IDefaultResponse {
    status: number;
    body: {
        message: string;
    }
}

export interface IDefaultGenericResponse<T> {
    status: number;
    body: {
      message: string | T;
    };
}