import { request } from 'graphql-request';

const query = `
mutation getShred($id: String!) {
  text: get(id:$id)
}
`;

export async function getShred(id: string): Promise<string> {
  const data = await request<{ text: string }>('/api', query, { id });
  return data.text;
}
