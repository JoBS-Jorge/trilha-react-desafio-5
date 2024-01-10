import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://hoixzqyurkgiewxpsnxa.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaXh6cXl1cmtnaWV3eHBzbnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MTA2ODQsImV4cCI6MjAyMDQ4NjY4NH0.yMh6m0Yhp0W6HDAgsRIPSVv0N-tKv7G0CsSDY4eov4o",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaXh6cXl1cmtnaWV3eHBzbnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MTA2ODQsImV4cCI6MjAyMDQ4NjY4NH0.yMh6m0Yhp0W6HDAgsRIPSVv0N-tKv7G0CsSDY4eov4o",
        Range: 0-9
    }
})
