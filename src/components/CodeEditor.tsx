import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Copy, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(10):", fibonacci(10));`);

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running...");
    
    // Simulate code execution
    setTimeout(() => {
      try {
        // Simple evaluation for demo purposes
        if (code.includes("fibonacci")) {
          setOutput("Fibonacci(10): 55\n// Execution time: 0.12ms\n// Process completed successfully");
        } else if (code.includes("console.log")) {
          const match = code.match(/console\.log\((.*?)\)/);
          if (match) {
            setOutput(`${match[1].replace(/['"]/g, '')}\n// Execution time: 0.05ms\n// Process completed successfully`);
          }
        } else {
          setOutput("// Code executed successfully\n// No output to display");
        }
        
        toast({
          title: "Code executed successfully",
          description: "Your code ran without errors",
        });
      } catch (error) {
        setOutput(`Error: ${error}\n// Execution failed`);
        toast({
          title: "Execution error",
          description: "There was an error running your code",
          variant: "destructive",
        });
      }
      setIsRunning(false);
    }, 1000);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Code copied",
        description: "Code has been copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy code to clipboard",
        variant: "destructive",
      });
    }
  };

  const resetCode = () => {
    setCode(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(10):", fibonacci(10));`);
    setOutput("");
    toast({
      title: "Code reset",
      description: "Code has been reset to default",
    });
  };

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
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-8 px-3 text-xs hover:bg-primary/10"
            onClick={copyCode}
          >
            <Copy className="w-3 h-3 mr-1" />
            Copy
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-8 px-3 text-xs hover:bg-muted/50"
            onClick={resetCode}
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset
          </Button>
          <Button 
            size="sm" 
            className="h-8 px-3 text-xs bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent border-0"
            onClick={runCode}
            disabled={isRunning}
          >
            <Play className="w-3 h-3 mr-1" />
            {isRunning ? "Running..." : "Run"}
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 divide-x divide-border/30">
        {/* Code Panel */}
        <div className="p-6">
          <div className="text-sm text-muted-foreground mb-3 font-medium">Code Editor</div>
          <div className="bg-gradient-to-br from-editor-bg to-editor-bg/90 rounded-lg border border-editor-border overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[200px] p-4 bg-transparent text-editor-foreground font-mono text-sm leading-relaxed resize-none focus:outline-none"
              placeholder="Write your code here..."
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="p-6">
          <div className="text-sm text-muted-foreground mb-3 font-medium">Console Output</div>
          <div className="bg-gradient-to-br from-editor-bg to-editor-bg/90 rounded-lg p-4 font-mono text-sm leading-relaxed min-h-[200px] border border-editor-border">
            <div className="text-editor-foreground whitespace-pre-wrap">
              {output || (
                <>
                  <span className="text-code-comment">// Click "Run" to execute your code</span>
                  <br />
                  <span className="text-code-comment">// Output will appear here...</span>
                </>
              )}
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