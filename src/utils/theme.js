export function applyStoredTheme() {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
  }
}
