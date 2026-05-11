import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type ChatMessageProps = {
  role: "user" | "assistant";
  text: string;
  time: string;
};

export default function ChatMessage({
  role,
  text,
  time,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0">
          AI
        </div>
      )}

      <div
        className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] ${
          isUser
            ? "bg-white text-black"
            : "bg-gray-900 text-gray-200 border border-gray-800"
        }`}
      >
        <div className="prose prose-invert max-w-none prose-p:my-1 prose-ul:my-2 prose-li:my-1">
          <ReactMarkdown
            components={{
              code(props) {
                const { children, className } = props;

                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-black px-1 py-0.5 rounded">
                    {children}
                  </code>
                );
              },
            }}
          >
            {text}
          </ReactMarkdown>
        </div>

        <p
          className={`text-xs mt-2 ${
            isUser ? "text-gray-600" : "text-gray-500"
          }`}
        >
          {time}
        </p>
      </div>

      {isUser && (
        <div className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold shrink-0">
          You
        </div>
      )}
    </div>
  );
}