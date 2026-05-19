# Pulse Analytics — Dashboard

Аналитический дашборд с визуализацией ключевых метрик. Чистый HTML, CSS и JavaScript — без сторонних фреймворков и зависимостей.

---

## 📁 Структура проекта

```
dashboard/
├── index.html                  # Главная страница
├── icons/                      # Иконки и фавиконы
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
├── scripts/                    # JavaScript-модули
│   ├── activity-table.js       # Таблица активности
│   ├── bar-chart.js            # Столбчатые графики
│   ├── canvas-helpers.js       # Вспомогательные функции для Canvas
│   ├── date-display.js         # Отображение даты
│   ├── date-generation.js      # Генерация дат
│   ├── date-pills.js           # Фильтр по датам (кнопки-пилюли)
│   ├── donut-chart.js          # Круговая диаграмма (Traffic Sources)
│   ├── init-resize.js          # Обработка изменения размера окна
│   ├── kpi-update.js           # Обновление KPI-карточек
│   ├── line-chart.js           # Линейный график (User Growth)
│   ├── sidebar-toggle.js       # Сворачивание/разворачивание сайдбара
│   ├── tooltip-logic.js        # Всплывающие подсказки на графиках
│   └── utils.js                # Общие утилиты
└── styles/                     # CSS-стили
    ├── main.css                # Главный файл стилей (импорт)
    ├── variables.css           # CSS-переменные (цвета, шрифты, отступы)
    ├── main-wrapper.css        # Общий layout страницы
    ├── header.css              # Шапка
    ├── sidebar.css             # Боковая панель навигации
    ├── kpi-cards.css           # KPI-карточки
    ├── chart-grid.css          # Сетка графиков
    ├── donut-chart-row.css     # Строка с круговой диаграммой
    ├── date-filter-pills.css   # Стили фильтра дат
    ├── table.css               # Таблица активности
    ├── tooltip.css             # Всплывающие подсказки
    ├── overlay.css             # Оверлей для мобильного меню
    └── responsive.css          # Адаптивность
```

---

## 🚀 Запуск

Откройте `index.html` в браузере напрямую или через локальный сервер:

```bash
# Python
python -m http.server 5500

# Node.js (npx)
npx serve .
```

Затем перейдите по адресу `http://localhost:5500`.

---

## 📊 Что есть на дашборде

### KPI-карточки
- **Monthly Active Users** — количество активных пользователей за месяц
- **Monthly Recurring Revenue** — ежемесячная выручка
- **Churn Rate** — показатель оттока пользователей
- **Avg Session Duration** — средняя продолжительность сессии

### Графики
- **User Growth** — линейный график роста активных пользователей по месяцам
- **Monthly Revenue** — столбчатый график выручки по месяцам
- **Traffic Sources** — круговая диаграмма распределения источников трафика (Organic, Direct, Referral, Social)

### Навигация
- Боковая панель с разделами: Dashboard, Users, Revenue, Events, Funnels, Settings
- Фильтр периода: Last 7 days / Last 30 days / Last 90 days / Last Year

---

## ⚠️ Текущее состояние

> **Кнопки и навигация в данный момент не функциональны** — это чистый визуальный прототип.

### Что работает

- [x] Отрисовка всех графиков (Canvas)
- [x] Адаптивный layout
- [x] Сворачивание сайдбара
- [x] Отображение текущей даты

---

## 🛠 Технологии

| Технология | Применение |
|---|---|
| HTML5 | Разметка |
| CSS3 (Custom Properties) | Стили и темизация |
| Vanilla JavaScript (ES6+) | Логика и отрисовка |
| Canvas API | Графики (линейный, столбчатый, круговой) |

Без jQuery, без React, без любых npm-пакетов.
