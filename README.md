# 🌀 React Text Scrambler

A lightweight and customizable React component that animates text with a scrambling effect. Ideal for dynamic headers, intros, or glitchy UI transitions.

---

## 📦 Installation

Install via npm:

```bash
npm i @skyshots/react-text-scrambler
```

Or with yarn:

```bash
yarn add @skyshots/react-text-scrambler
```

---

## ⚛️ Usage

Import and use the `TextScramble` component in your React app:

```tsx
import React from 'react';
import { TextScramble } from '@skyshots/react-text-scrambler';

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <TextScramble
        texts={['Innovate', 'Create', 'Inspire']}
        letterSpeed={40}
        nextLetterSpeed={100}
        pauseTime={2000}
        className="scramble-text"
      />
    </div>
  );
};

export default App;
```

---

## 🧩 Props

| Prop              | Type       | Default | Description                                                                 |
|-------------------|------------|---------|-----------------------------------------------------------------------------|
| `texts`           | `string[]` | —       | Array of strings to scramble through                                       |
| `letterSpeed`     | `number`   | `50`    | Speed (ms) for scrambling individual letters                               |
| `nextLetterSpeed` | `number`   | `100`   | Speed (ms) for revealing next letter                                       |
| `pauseTime`       | `number`   | `1500`  | Pause duration (ms) between each full text                                 |
| `className`       | `string`   | `''`    | Optional CSS class for styling the wrapper                                 |

---

## 🎨 Styling

You can style the scrambled text using the `className` prop:

```css
.scramble-text {
  font-size: 2rem;
  font-family: 'Courier New', monospace;
  color: #00ffcc;
  letter-spacing: 2px;
}
```

---

## 🧠 Features

- 🔁 Loops through multiple texts
- ⏱️ Adjustable timing for scrambling and transitions
- 🎨 Fully styleable with custom classes
- ⚡ No external dependencies

---

## 🚀 Use Cases

- Hero sections with animated slogans
- Loading screens with dynamic messages
- Interactive UI transitions
- Glitch-style effects for cyberpunk themes

---

## 🛠️ Roadmap

- [ ] Hook-based API (`useScramble`)
- [ ] Custom character sets
- [ ] Callback support on text change
- [ ] Accessibility improvements

---

## 🧪 Development

Clone the repo and run locally:

```bash
git clone https://github.com/your-username/react-text-scrambler.git
cd react-text-scrambler
npm install
npm start
```

---

## 📄 License

MIT License © [Sky]

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 💬 Questions?

Feel free to open an issue or reach out on [GitHub Discussions](https://github.com/your-username/react-text-scrambler/discussions).
