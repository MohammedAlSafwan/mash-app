import { Item } from "@mashedapp/models"
import { api } from "../api"
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getManyItems: build.query<GetManyItemsApiResponse, GetManyItemsApiArg>({
      query: queryArg => ({
        url: `/api/items`,
        params: {
          fields: queryArg.fields,
          s: queryArg.s,
          filter: queryArg.filter,
          or: queryArg.or,
          sort: queryArg.sort,
          join: queryArg.join,
          limit: queryArg.limit,
          offset: queryArg.offset,
          page: queryArg.page,
          cache: queryArg.cache,
        },
      }),
    }),
    createOneItem: build.mutation<CreateOneItemApiResponse, CreateOneItemApiArg>({
      query: queryArg => ({ url: `/api/items`, method: "POST", body: queryArg.item }),
    }),
    updateOneItem: build.mutation<UpdateOneItemApiResponse, UpdateOneItemApiArg>({
      query: queryArg => ({ url: `/api/items/${queryArg.id}`, method: "PATCH", body: queryArg.item }),
    }),
    deleteOneItem: build.mutation<DeleteOneItemApiResponse, DeleteOneItemApiArg>({
      query: queryArg => ({ url: `/api/items/${queryArg.id}`, method: "DELETE" }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as itemsApi }
export type GetManyItemsApiResponse = /** status 200 Get many base response */ GetManyItemResponseDto | Item[]
export type GetManyItemsApiArg = {
  /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
  fields?: string[]
  /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
  s?: string
  /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
  filter?: string[]
  /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
  or?: string[]
  /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
  sort?: string[]
  /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
  join?: string[]
  /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
  limit?: number
  /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
  offset?: number
  /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
  page?: number
  /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
  cache?: number
}
export type CreateOneItemApiResponse = /** status 201 Get create one base response */ Item
export type CreateOneItemApiArg = {
  item: Item
}
export type UpdateOneItemApiResponse = /** status 200 Response */ Item
export type UpdateOneItemApiArg = {
  id: number
  item: Item
}
export type DeleteOneItemApiResponse = unknown
export type DeleteOneItemApiArg = {
  id: number
}

export type GetManyItemResponseDto = {
  data: Item[]
  count: number
  total: number
  page: number
  pageCount: number
}
export const { useGetManyItemsQuery, useCreateOneItemMutation, useUpdateOneItemMutation, useDeleteOneItemMutation } = injectedRtkApi
