import { createClient } from "@supabase/supabase-js"

const url = "https://gqkuommdmfzmwkzdewma.supabase.co"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI"
const authorizationKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJiNjcwZDRjMWE5Zjc1YzdkN2VmMGVjODEiLCJpYXQiOjE2NTA0MTMzOTd9.ma18KOvaDZlBpcoAPNgViS89df9m6GPhr0-FgRtv6Ec" 

export const supabase = createClient(
  url,
  apikey,
  {
    headers: {
      Authorization: `Bearer ${authorizationKey}`
    }
  }
)
