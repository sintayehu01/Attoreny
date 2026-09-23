import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'fried-firm-website-6q47el1v',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_3_hfRFCLZhZsIJfnBXsK34WWuTba2YYX',
  authRequired: false,
  auth: { mode: 'managed' },
})
