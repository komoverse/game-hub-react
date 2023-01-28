export {}
// import request from './request';

// export default {
//   list: async (url: string) => {
//     const resp = await request.get(url);
//     const { data = [] } = resp;
//     return { data };
//   },
//   single: async (url: string) => {
//     const resp = await request.get(url);
//     const { data = {} } = resp;
//     return { data };
//   },
//   insert: async ({ url, body = {} }: any) => {
//     const dataResut = await request.post({
//       url,
//       body,
//     });
//     return dataResut;
//   },
//   update: async (url: string, data: any) => {
//     const dataResult = await request.put(url, data);
//     return dataResult;
//   },
//   delete: async (url: string) => {
//     await request.delete(url);
//   },
// };
