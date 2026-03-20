export const config = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || 'https://uyrlzmhqhhkbiujkvyit.supabase.co',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5cmx6bWhxaGhrYml1amt2eWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MTY0OTcsImV4cCI6MjA4MDk5MjQ5N30.Ajaw_3kjvEIHxu5z2yt1L-F4ng3Y4jMi4lA2Twp5iDA'
  },
  gemini: {
    apiKey: import.meta.env.GEMINI_API_KEY || 'AIzaSyBL0OvCdnwEuaeoE-VRjWjw4c4PLFRZZKk'
  },
  telegram: {
    botToken: import.meta.env.TELEGRAM_BOT_TOKEN || '8348048309:AAH-sHdnv42qx8MXQfRJPUjgf2moaZ8Nt1g',
    channelId: import.meta.env.TELEGRAM_CHANNEL_ID || '3219720203'
  }
};
