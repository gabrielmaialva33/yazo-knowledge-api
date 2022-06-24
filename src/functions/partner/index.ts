import { handlerPath } from '@libs/handler-resolver'

export const listPartners = {
  handler: `${handlerPath(__dirname)}/handler.listPartners`,
  events: [
    {
      http: {
        method: 'get',
        path: 'partner/',
      },
    },
  ],
}

export const getPartner = {
  handler: `${handlerPath(__dirname)}/handler.getPartner`,
  events: [
    {
      http: {
        method: 'get',
        path: 'partner/{id}',
      },
    },
  ],
}

export const storePartner = {
  handler: `${handlerPath(__dirname)}/handler.storePartner`,
  events: [
    {
      http: {
        method: 'post',
        path: 'partner',
      },
    },
  ],
}

export const editPartner = {
  handler: `${handlerPath(__dirname)}/handler.editPartner`,
  events: [
    {
      http: {
        method: 'put',
        path: 'partner/{id}',
      },
    },
  ],
}

export const deletePartner = {
  handler: `${handlerPath(__dirname)}/handler.deletePartner`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'partner/{id}',
      },
    },
  ],
}
