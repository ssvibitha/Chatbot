"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-0.5 h-5 bg-accent-cyan pointer-events-none z-50 animate-pulse"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Loading bar */}
      {isLoading && <div className="loading-bar" />}
      
      <div className="w-full max-w-6xl mx-auto h-screen flex flex-col p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-accent-cyan/10 rounded-sm flex items-center justify-center">
            <Bot className="h-6 w-6 text-accent-cyan" />
          </div>
          <div>
            <h1 className="text-2xl font-poppins font-semibold text-text-primary">
              NOVA
            </h1>
            <p className="text-sm text-text-primary/60 font-inter">
              Futuristic Mentor AI
            </p>
            <p className="text-xs text-accent-cyan font-inter mt-1">
              Clarity over noise.
            </p>
          </div>
        </div>

        {/* Chat Container */}
        <Card className="flex-1 flex flex-col bg-transparent border-void-blue/30 shadow-none">
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea 
              ref={scrollAreaRef}
              className="flex-1 px-6 py-8"
            >
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-20 h-20 bg-accent-cyan/5 rounded-sm flex items-center justify-center mb-8">
                    <Bot className="h-10 w-10 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-text-primary mb-4">
                    Ready for guidance
                  </h3>
                  <p className="text-text-primary/60 max-w-md font-inter leading-relaxed">
                    I analyze, clarify, and provide direction. Ask technical questions, 
                    seek strategic advice, or explore complex topics with precision.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {messages.map((message) => (
                    <div key={message.id} className="w-full">
                      {message.role === 'assistant' ? (
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-accent-cyan/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="h-4 w-4 text-accent-cyan" />
                          </div>
                          <div className="flex-1">
                            <div className="nova-message">
                              <p className="whitespace-pre-wrap font-inter">
                                {message.content}
                              </p>
                            </div>
                            <p className="text-xs text-text-primary/40 mt-2 font-inter">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-4 justify-end">
                          <div className="flex-1">
                            <div className="user-message">
                              <p className="whitespace-pre-wrap font-inter">
                                {message.content}
                              </p>
                            </div>
                            <p className="text-xs text-text-primary/40 mt-2 text-right font-inter">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                          <div className="w-8 h-8 bg-void-blue/50 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                            <User className="h-4 w-4 text-text-primary" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-cyan/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-4 w-4 text-accent-cyan" />
                      </div>
                      <div className="flex-1">
                        <div className="nova-message">
                          <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse delay-100"></div>
                              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse delay-200"></div>
                            </div>
                            <span className="text-sm text-text-primary/60 font-inter">Processing...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
            
            {/* Input Area */}
            <div className="p-6 border-t border-void-blue/30">
              {error && (
                <Alert className="mb-4 bg-red-900/20 border-red-500/30">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-300">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Textarea
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setIsTyping(e.target.value.length > 0);
                  }}
                  placeholder="Ask with clarity. I will respond with direction."
                  className={`flex-1 min-h-[60px] max-h-32 resize-none bg-transparent border-void-blue/50 text-text-primary placeholder:text-text-primary/40 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan mono-input ${
                    isTyping ? 'input-glow' : ''
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="btn-primary h-auto self-end"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
              
              <p className="text-xs text-text-primary/40 mt-3 text-center font-inter">
                Enter to send • Shift+Enter for new line
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}