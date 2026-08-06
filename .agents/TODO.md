# TODO — Оставшаяся разработка «Бухта Coffee Roasters»

Составлен: 2026-08-06  
Статус: ожидает выполнения

---

## Что уже готово (не трогать)

- ✅ Все 10 секций страницы визуально реализованы и собираются
- ✅ Скролл-анимация Hero с canvas и image sequence
- ✅ Шапка (Header) с мобильным меню и переключателем языка RU/EN
- ✅ i18n-архитектура: `ru.json` / `en.json` + хелпер `getTranslation`
- ✅ Данные меню, локаций и контактов в `src/data/`
- ✅ Компонент `InteractiveHoverButton` в `src/components/ui/`
- ✅ Яндекс.Карта с метками трёх точек
- ✅ `.gitignore` содержит `.env` — ключи не попадут в репозиторий

---

## Что НЕ работает / не реализовано

- ❌ **Все 4 кнопки-отправки** (`mailto:`) открывают почтовое приложение вместо модального окна с формой
- ❌ **EmailJS не установлен** в проекте — пакет `@emailjs/browser` отсутствует в `package.json`
- ❌ **`.env` не создан** — нет переменных `PUBLIC_EMAILJS_*`
- ❌ **Компонент `ContactModal.tsx` не существует** — модальное окно нигде не реализовано
- ❌ **i18n пунктов меню** — в `Menu.astro` и `Roasting.astro` отображается только русский (`item.name.ru`), при переключении языка названия блюд и напитков не переводятся
- ❌ **i18n карточек локаций** — в `Locations.astro` жёстко прибит `lang = "ru"`, при переключении языка адреса и часы работы не меняются
- ❌ **i18n секции «Социальные сети»** в `Contact.astro` — текст «Соцсети» захардкожен на русском, не переводится
- ❌ **TECH.md** не обновлён — в нём всё ещё указан `mailto:` как способ связи, а EmailJS не упомянут
- ❌ **Строки для модала** отсутствуют в `ru.json` и `en.json` — нужны переводы для полей формы, кнопок, сообщений об успехе/ошибке

---

## Блок А — Подготовка EmailJS (ручные задачи)

> Эти задачи нужно выполнить вручную **до** того, как ИИ начнёт писать код.
> Результаты (три ключа) потребуются для следующего блока.

- [ ] **[ПОЛЬЗОВАТЕЛЬ]** Зарегистрироваться в EmailJS и получить ключи:

  **Шаг 1 — Создать аккаунт**
  1. Открыть https://www.emailjs.com/
  2. Нажать **Sign Up** (правый верхний угол)
  3. Заполнить форму: имя, email (используй любой рабочий), пароль
  4. Подтвердить email — проверить почту и кликнуть по ссылке в письме от EmailJS

  **Шаг 2 — Подключить email-сервис**
  1. После входа перейти в раздел **Email Services** (левое меню)
  2. Нажать **Add New Service**
  3. Выбрать **Gmail** (или другой сервис, куда хочешь получать заявки)
  4. Нажать **Connect Account** → авторизоваться через Google
  5. Скопировать **Service ID** (например, `service_xxxxxxx`)
  6. Нажать **Create Service**

  **Шаг 3 — Создать шаблон письма**
  1. Перейти в раздел **Email Templates** (левое меню)
  2. Нажать **Create New Template**
  3. В поле **Subject** ввести: `{{subject}}`
  4. В поле **Content** (тело письма) ввести:
     ```
     Новая заявка с сайта «Бухта»

     Тема: {{subject}}
     Имя: {{from_name}}
     Email: {{from_email}}

     Сообщение:
     {{message}}
     ```
  5. В поле **To Email** указать email, куда будут приходить письма
  6. Нажать **Save**
  7. Скопировать **Template ID** (например, `template_xxxxxxx`)

  **Шаг 4 — Получить публичный ключ**
  1. Перейти в **Account** → вкладка **General**
  2. Найти блок **API Keys**
  3. Скопировать **Public Key**

  **Итого нужно скопировать три значения:**
  - `Service ID` (вид: `service_xxxxxxx`)
  - `Template ID` (вид: `template_xxxxxxx`)
  - `Public Key` (длинная строка)

---

- [ ] **[ПОЛЬЗОВАТЕЛЬ]** Создать файл `.env` в корне проекта:

  1. Открыть корень проекта (`/Web AI Lessons/Module 3/AI/`)
  2. Создать файл `.env` (он уже есть в `.gitignore` — в репозиторий не попадёт)
  3. Вставить следующее, подставив реальные ключи из шага выше:
     ```
     PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
     PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
     PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
     ```
  4. Сохранить файл
  5. Сообщить ИИ-агенту, что `.env` готов — это сигнал начинать Блок Б

---

## Блок Б — Установка EmailJS и создание модала

> Начинать только после того, как Блок А завершён и файл `.env` создан.

- [ ] **[ИИ]** Установить пакет `@emailjs/browser`:
  - Выполнить `npm install @emailjs/browser`
  - Убедиться, что пакет появился в `package.json`
  - Сделать commit: `feat: install @emailjs/browser`

- [ ] **[ИИ]** Создать компонент `ContactModal.tsx` (`src/components/ContactModal.tsx`):
  - React-компонент с `client:load`
  - Props: `isOpen: boolean`, `onClose: () => void`, `subject: string`, `lang: "ru" | "en"`
  - Поля формы: Имя (`from_name`), Email (`from_email`), Сообщение (`message`) — все обязательные
  - Скрытое поле `subject` заполняется автоматически из prop
  - При отправке вызывает `emailjs.send(...)` с ключами из `import.meta.env.PUBLIC_EMAILJS_*`
  - Состояния UI: `idle` → `loading` (кнопка задизаблена) → `success` / `error`
  - Закрывается по клику на overlay, по кнопке ✕ и по `Escape`
  - Стили по `DESIGN.md`: цвета `#021a35`, `#815500`, `#fdb647`; шрифты Source Serif 4 + Plus Jakarta Sans; скругления `rounded-2xl`
  - Все строки (плейсхолдеры, кнопки, сообщения) берёт из prop `lang` через словарь переводов
  - Сделать commit: `feat: add ContactModal component`

---

## Блок В — Добавить переводы для модала

- [ ] **[ИИ]** Добавить ключи для модала в `ru.json`:
  - Добавить блок `"modal"` с ключами:
    `title`, `name_label`, `name_placeholder`, `email_label`, `email_placeholder`,
    `message_label`, `message_placeholder`, `submit`, `submitting`,
    `success_title`, `success_text`, `error_text`, `close`
  - Сделать commit: `i18n: add modal strings to ru.json`

- [ ] **[ИИ]** Добавить соответствующие ключи в `en.json`:
  - Тот же блок `"modal"` с английскими строками
  - Убедиться, что все ключи совпадают с `ru.json`
  - Сделать commit: `i18n: add modal strings to en.json`

---

## Блок Г — Подключить модал к кнопкам

- [ ] **[ИИ]** Обновить `Menu.astro` — кнопка «Заказать зерно»:
  - Заменить `InteractiveHoverButton` с `href={mailto:...}` на кнопку, открывающую `ContactModal` с темой `"Заказ зерна"` / `"Order coffee beans"`
  - Сделать commit: `feat: open modal from Menu order button`

- [ ] **[ИИ]** Обновить `Roasting.astro` — кнопки «Заказать зерно» и «Подарочная карта»:
  - Оба `InteractiveHoverButton` заменить на кнопки, открывающие `ContactModal` с соответствующими темами
  - Один экземпляр `ContactModal` на секцию, переключать `subject` и `isOpen` через state
  - Сделать commit: `feat: open modal from Roasting buttons`

- [ ] **[ИИ]** Обновить `Events.astro` — кнопка «Записаться на каппинг»:
  - Заменить `mailto:` на `ContactModal` с темой `"Запись на каппинг"` / `"Cupping registration"`
  - Сделать commit: `feat: open modal from Events button`

- [ ] **[ИИ]** Обновить `Careers.astro` — кнопка «Откликнуться»:
  - Заменить `mailto:` на `ContactModal` с темой `"Отклик на вакансию"` / `"Job application"`
  - Сделать commit: `feat: open modal from Careers button`

---

## Блок Д — Починить i18n (независимо от EmailJS)

- [ ] **[ИИ]** Починить i18n названий блюд и напитков в `Menu.astro`:
  - `item.name.ru` захардкожен — при EN не переключается
  - Читать текущий язык через `localStorage` / `window.__lang` и отображать `item.name[lang]`
  - При переключении RU↔EN названия меню обновляются
  - Сделать commit: `fix: i18n for menu item names`

- [ ] **[ИИ]** Починить i18n в `Locations.astro`:
  - `lang = "ru"` захардкожен — адреса и часы не переключаются
  - Подключить тот же механизм получения текущего языка
  - Сделать commit: `fix: i18n for location cards`

- [ ] **[ИИ]** Починить захардкоженный текст «Соцсети» в `Contact.astro`:
  - Добавить ключ `"social_title"` в `ru.json` (`"Соцсети"`) и `en.json` (`"Social Media"`)
  - Заменить захардкоженную строку на ключ с `data-i18n`
  - Сделать commit: `fix: i18n for social media label in Contact`

---

## Блок Е — Обновить документацию

- [ ] **[ИИ]** Обновить `TECH.md`:
  - Убрать строку `mailto:` из таблицы внешних сервисов
  - Добавить `@emailjs/browser` в таблицу npm-пакетов (версию взять из `package.json` после установки)
  - Добавить `EmailJS (Free)` в таблицу внешних сервисов с описанием роли
  - Сделать commit: `docs: update TECH.md with EmailJS`

---

## Итоговый порядок выполнения

```
[ПОЛЬЗОВАТЕЛЬ] Блок А — регистрация в EmailJS, получение ключей
[ПОЛЬЗОВАТЕЛЬ] Создать .env с ключами
       ↓ (сообщить ИИ, что .env готов)
[ИИ] Блок Б — установка npm-пакета + создание ContactModal.tsx
[ИИ] Блок В — добавить переводы для модала в ru.json и en.json
[ИИ] Блок Г — подключить модал к 4 кнопкам (по одной кнопке за раз)
[ИИ] Блок Д — починить оставшиеся проблемы i18n (параллельно с Г или после)
[ИИ] Блок Е — обновить TECH.md
```
