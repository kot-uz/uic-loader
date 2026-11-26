# @uzinfocom/loader

Фирменный лоадер Uzinfocom в виде атома: два электрона летают по наклонённым
орбитам, пока идёт загрузка. Цвет по умолчанию — `#4C51C6`.

## Установка

```bash
# из GitHub (пока пакет не опубликован в npm)
npm install github:kot-uz/uic-loader

# локально, для разработки
npm link ../uic-loader
```

## Использование

### Веб-компонент (любой фреймворк и обычный HTML)

```js
import "@uzinfocom/loader"; // регистрирует <uic-loader>
```

```html
<uic-loader
  size="64"
  color="#4C51C6"
  duration="0.75"
  label="Загрузка"
></uic-loader>
```

Атрибуты реактивны: при изменении лоадер перерисовывается.

### React

```jsx
import { UicLoader } from "@uzinfocom/loader/react";

<UicLoader size={32} color="#fff" />;
```

Компонент SSR-безопасен (Next.js и т. п.), дополнительно принимает `className` и `style`.
`react` — опциональная peer-зависимость.

### Строка SVG (шаблонизаторы, серверный рендер)

```js
import { html } from "@uzinfocom/loader";

el.innerHTML = html({ size: "3rem" });
```

`markup()` возвращает только разметку, `STYLES` — CSS отдельно.

### Без сборщика

```html
<script
  type="module"
  src="/node_modules/@uzinfocom/loader/src/element.js"
></script>
```

> Пакет отдаёт исходные ES-модули без сборки. В Next.js может понадобиться
> `transpilePackages: ['@uzinfocom/loader']`, а веб-компонент нужно импортировать
> только на клиенте.

## Параметры

| Параметр   | Тип              | По умолчанию | Описание                                 |
| ---------- | ---------------- | ------------ | ---------------------------------------- |
| `size`     | number \| string | `48`         | Число = px, или любая CSS-длина (`3rem`) |
| `color`    | string           | `#4C51C6`    | Цвет линий                               |
| `duration` | number           | `0.75`       | Время одного оборота электрона, секунды  |
| `label`    | string           | `Loading`    | Текст для скринридеров                   |

## Разработка

```bash
npx serve .   # затем открыть http://localhost:3000/demo/
```

## Благодарности

Механика анимации основана на «Atom Loading Icon» авторства Jon Milner
([CodePen qBQwQJ](https://codepen.io/jonmilner/pen/qBQwQJ), лицензия MIT).
