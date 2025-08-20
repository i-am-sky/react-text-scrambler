export function scrambleText(
  text: string,
  symbols: string[] = "!<>-_\\/[]{}—=+*^?#".split("")
): string {
  return text
    .split("")
    .map((char) =>
      Math.random() > 0.5
        ? char
        : symbols[Math.floor(Math.random() * symbols.length)]
    )
    .join("");
}
