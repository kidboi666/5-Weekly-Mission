// user login info
export interface IHeaderUserLoginInfoApi {
  data: [
    {
      id:number,
      email:string,
      name?:string,
      image_source?:string,
      created_at?:string,
      auth_id:string
    }
  ]
}