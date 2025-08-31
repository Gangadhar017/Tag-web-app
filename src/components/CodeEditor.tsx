import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Copy } from "lucide-react";

const CodeEditor = () => {
  const [code] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(10):", fibonacci(10));`);

  const [output] = useState("Fibonacci(10): 55");

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-card to-muted/50 rounded-2xl shadow-hero border border-border/50 overflow-hidden">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/30">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-success/60"></div>
          </div>
          <span className="text-sm font-medium text-muted-foreground">main.js</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="ghost" className="h-8 px-3 text-xs hover:bg-primary/10">
            <Copy className="w-3 h-3 mr-1" />
            Copy
          </Button>
          <Button size="sm" className="h-8 px-3 text-xs bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent border-0">
            <Play className="w-3 h-3 mr-1" />
            Run
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 divide-x divide-border/30">
        {/* Code Panel */}
        <div className="p-6">
          <div className="text-sm text-muted-foreground mb-3 font-medium">Code Editor</div>
          <div className="bg-gradient-to-br from-editor-bg to-editor-bg/90 rounded-lg p-4 font-mono text-sm leading-relaxed min-h-[200px] border border-editor-border">
            <pre className="text-editor-foreground">
              <code>
                <span className="text-code-keyword">function</span> <span className="text-yellow-300">fibonacci</span>(<span className="text-blue-300">n</span>) {"{"}
                {"\n"}  <span className="text-code-keyword">if</span> (<span className="text-blue-300">n</span> {"<="} <span className="text-green-300">1</span>) <span className="text-code-keyword">return</span> <span className="text-blue-300">n</span>;
                {"\n"}  <span className="text-code-keyword">return</span> <span className="text-yellow-300">fibonacci</span>(<span className="text-blue-300">n</span> - <span className="text-green-300">1</span>) + <span className="text-yellow-300">fibonacci</span>(<span className="text-blue-300">n</span> - <span className="text-green-300">2</span>);
                {"\n"}{"}"}
                {"\n"}
                {"\n"}<span className="text-blue-300">console</span>.<span className="text-yellow-300">log</span>(<span className="text-code-string">"Fibonacci(10):"</span>, <span className="text-yellow-300">fibonacci</span>(<span className="text-green-300">10</span>));
              </code>
            </pre>
          </div>
        </div>

        {/* Output Panel */}
        <div className="p-6">
          <div className="text-sm text-muted-foreground mb-3 font-medium">Console Output</div>
          <div className="bg-gradient-to-br from-editor-bg to-editor-bg/90 rounded-lg p-4 font-mono text-sm leading-relaxed min-h-[200px] border border-editor-border">
            <div className="text-editor-foreground">
              <span className="text-code-comment">// Execution time: 0.12ms</span>
              <br />
              <span className="text-green-300">{output}</span>
              <br />
              <span className="text-code-comment">// Process completed successfully</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="px-6 py-3 bg-gradient-to-r from-muted/30 to-primary/5 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <span>JavaScript</span>
          <span>•</span>
          <span>UTF-8</span>
          <span>•</span>
          <span className="text-success">Connected</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Lines: 7</span>
          <span>•</span>
          <span>Ln 7, Col 45</span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;