import { FC, useState } from "react";
import "./codeSnippet.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const CodeSnippet: FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="code-container">
      <pre className="code-block">
        <button onClick={copyToClipboard} className="copy-button">
          {copied ? (
            <i className="fas fa-check-circle copied-icon" />
          ) : (
            <i className="fas fa-copy copy-icon" />
          )}
        </button>
        <code>{code}</code>
      </pre>
    </div>
  );
};
