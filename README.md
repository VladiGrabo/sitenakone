# FinancePlan

Приложение для управления личными финансами с AI-анализом и интеграцией Telegram.

## Деплой на Netlify

### 1. Настройка переменных окружения

В Netlify Dashboard -> Site settings -> Environment variables добавьте:

```
VITE_SUPABASE_URL=https://uyrlzmhqhhkbiujkvyit.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5cmx6bWhxaGhrYml1amt2eWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MTY0OTcsImV4cCI6MjA4MDk5MjQ5N30.Ajaw_3kjvEIHxu5z2yt1L-F4ng3Y4jMi4lA2Twp5iDA
GEMINI_API_KEY=AIzaSyBL0OvCdnwEuaeoE-VRjWjw4c4PLFRZZKk
TELEGRAM_BOT_TOKEN=8348048309:AAH-sHdnv42qx8MXQfRJPUjgf2moaZ8Nt1g
TELEGRAM_CHANNEL_ID=3219720203
```

### 2. Настройки сборки

Netlify автоматически определит настройки из `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`

### 3. После деплоя

1. Проверьте что все переменные окружения добавлены
2. Нажмите "Trigger deploy" для пересборки
3. Проверьте логи сборки на наличие ошибок

## Локальная разработка

```bash
npm install
npm run dev
```

## Структура проекта

- `/src/components` - React компоненты
- `/src/lib` - Утилиты и конфигурация Supabase
- `/supabase/functions` - Edge Functions
- `/supabase/migrations` - Миграции базы данных
