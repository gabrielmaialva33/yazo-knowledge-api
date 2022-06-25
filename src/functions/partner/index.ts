import { handlerPath } from '@libs/handler-resolver'

export const storePartner = {
  handler: `${handlerPath(__dirname)}/handler.storePartner`,
  events: [
    {
      http: {
        method: 'post',
        path: 'partner/',
      },
    },
  ],
}
