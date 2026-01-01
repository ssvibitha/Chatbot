import ChatInterface from '@/components/chat-interface';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            NOVA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your futuristic AI mentor. Get clear, thoughtful guidance on any topic with practical insights and real-world analogies.
          </p>
        </div>
        
        <ChatInterface />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            NOVA AI Mentor • Powered by Advanced Language Models
          </p>
        </div>
      </div>
    </div>
  );
}