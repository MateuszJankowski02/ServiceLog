const contentsquareScriptUrl = import.meta.env.VITE_CONTENTSQUARE_SCRIPT_URL;

export const loadContentsquare = () => {
  if (!contentsquareScriptUrl) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = contentsquareScriptUrl;

  document.head.appendChild(script);
};
