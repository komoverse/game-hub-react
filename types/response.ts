export interface ErrorResponseDto {
  response: {
    data: {
      status: number | string;
      message: string;
    };
  };
}
