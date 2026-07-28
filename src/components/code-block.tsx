"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
	code: string;
	language: string;
};

export function CodeBlock({ code, language }: CodeBlockProps) {
	return (
		<div className="overflow-hidden rounded-[18px] border border-border bg-[#272822] shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
			<SyntaxHighlighter
				language={language}
				style={monokai}
				wrapLongLines
				customStyle={{
					background: "transparent",
					margin: 0,
					padding: "1.25rem",
					fontSize: "0.875rem",
					lineHeight: "1.7",
				}}
				codeTagProps={{
					style: {
						fontFamily:
							"var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
					},
				}}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
}
