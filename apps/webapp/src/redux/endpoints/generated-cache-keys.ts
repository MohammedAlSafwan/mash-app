/**
 * This file was automatically generated by tools/generators/generate-cache-file.js file
 */

import { itemsApi } from "./items-endpoints"

export const addItemsCacheKeys = () =>
  itemsApi.enhanceEndpoints({
    endpoints: {
      getManyItems: { providesTags: ["items"] },
      createOneItem: { invalidatesTags: ["items"] },
      updateOneItem: { invalidatesTags: ["items"] },
      deleteOneItem: { invalidatesTags: ["items"] },
    },
  })
export const addGeneratedCacheKeys = () => {
  addItemsCacheKeys()
}
