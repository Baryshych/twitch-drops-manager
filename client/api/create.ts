import { request } from 'graphql-request';

const query = `
mutation createShred($text: String!) {
  id: create(text: $text)
}
`;

export async function createShred(text: string): Promise<string> {
  const data = await request<{ id: string }>('/api', query, { text });
  return data.id;
}
