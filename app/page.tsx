import ChatInterface from '@/components/chat-interface';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Chat Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of Google's Gemini Pro AI model in a beautiful, intuitive chat interface.
          </p>
        </div>
        
        <ChatInterface />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Powered by Google Gemini Pro • Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}