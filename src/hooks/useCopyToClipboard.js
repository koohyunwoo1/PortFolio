import { useEffect, useState } from "react";

export const useCopyToClipboard = (resetDelay = 1500) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timer = setTimeout(() => setIsCopied(false), resetDelay);
    return () => clearTimeout(timer);
  }, [isCopied, resetDelay]);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      alert("복사에 실패했습니다.");
    }
  };

  return { isCopied, copy };
};
