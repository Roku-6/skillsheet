import { APIGatewayProxyEvent, APIGatewayEventRequestContext, APIGatewayProxyResult } from "aws-lambda";
import mysql from "promise-mysql";
import { dbConnection } from "./dbConfigure";

// getAllResumes関数
export async function getAllResumes(event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> {

  const connection = await mysql.createConnection({
    host: dbConnection.host,
    port: dbConnection.port,
    user: dbConnection.user,
    password: dbConnection.password,
    database: dbConnection.database
  });

  let sql = `SELECT * FROM resumes`;
  sql += `;`;

  let result;
  try{
    result = await connection.query(sql);
  }catch(e){
    throw e;
  };

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,GET"
    },
    body: JSON.stringify(result)
  }
  return response;
  
  };

// getResume関数
export async function getResume(event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> {

  const connection = await mysql.createConnection({
    host: dbConnection.host,
    port: dbConnection.port,
    user: dbConnection.user,
    password: dbConnection.password,
    database: dbConnection.database
  });

  const order: any = event['pathParameters'];

  let sql = `SELECT * FROM resumes `;
  sql += `WHERE resume_id="`;
  sql += order.resume_id;
  sql += `";`;

  let result;
  try{
    result = await connection.query(sql);
  }catch(e){
    throw e;
  };

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,GET"
    },
    body: JSON.stringify(result)
  }
  return response;
  
}

// postResume関数
export async function postResume(event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> {

  const connection = await mysql.createConnection({
    host: dbConnection.host,
    port: dbConnection.port,
    user: dbConnection.user,
    password: dbConnection.password,
    database: dbConnection.database
  });

  let body;
  if (event.body) {
    body= JSON.parse(event.body);
  }else {
    const response: APIGatewayProxyResult = {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: "Not Found!"
    }
    return response;
  };
  
  let sql = `insert into resumes (resume_id, title) values ('`;
  sql += body.resume_id;
  sql += `', '`;
  sql += body.title;
  sql += `');`;

  let result;
  try{
    result = await connection.query(sql);
  }catch(e){
    throw e;
  };

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST"
    },
    body: JSON.stringify(result)
  }
  return response;
  
}

// putResume関数
export async function putResume(event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> {
  
  const connection = await mysql.createConnection({
    host: dbConnection.host,
    port: dbConnection.port,
    user: dbConnection.user,
    password: dbConnection.password,
    database: dbConnection.database
  });

  const order: any = event['pathParameters'];
  
  let body;
  if (event.body) {
    body= JSON.parse(event.body);
  }else {
    const response: APIGatewayProxyResult = {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: "Not Found!"
    }
    return response;
  };

  let sql = `update resumes set title='`;
  sql += body.title;
  sql += ``;
  sql += `' WHERE resume_id='`;
  sql += order.resume_id;
  sql += `';`;

  console.log(sql)

  let result;
  try{
    result = await connection.query(sql);
  }catch(e){
    throw e;
  };

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,PUT"
    },
    body: JSON.stringify(result)
  }
  return response;
  
}

// deleteResume関数
export async function deleteResume(event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> {

  const connection = await mysql.createConnection({
    host: dbConnection.host,
    port: dbConnection.port,
    user: dbConnection.user,
    password: dbConnection.password,
    database: dbConnection.database
  });
  
  const req: any = event['pathParameters'];

  let sql = `delete from resumes where resume_id='`;
  sql += req.resume_id
  sql += `';`;

  let result;
  try{
    result = await connection.query(sql);
  }catch(e){
    throw e;
  };
  
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,DELETE"
    },
    body: JSON.stringify(result)
  }
  return response;
  
}