import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

/**
 * Lambda function handler for processing API Gateway events.
 *
 * @param event - The event object from API Gateway.
 * @returns The response object to be returned to API Gateway.
 */
export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      event,
      key: process.env.AWS_ACCESS_KEY_ID,
      TEST_ENV_VAR: process.env.TEST_ENV_VAR,
      TEST_ENV_CONSTANT: process.env.TEST_ENV_CONSTANT,
    }),
  };
};
