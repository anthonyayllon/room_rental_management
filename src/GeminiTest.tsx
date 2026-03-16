import React, { useState } from 'react';
import { Bot, Send, Loader2 } from 'lucide-react';

export default function GeminiTest() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError('');
    
    try {
      // Llamada al endpoint de nuestro backend (Express redirigido por Vite)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error en la petición');
      }

      setResponse(data.message);
    } catch (err: any) {
      setError(err.message || 'Error al conectar con el servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#111418] p-4 md:p-8">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-3 rounded-xl">
            <Bot size={28} className="text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-white text-[#0d121b]">
              Prueba de conexión: Gemini AI
            </h1>
            <p className="text-[#4c669a] dark:text-gray-400">
              Esta interfaz se comunica con tu servidor en el puerto 3001.
            </p>
          </div>
        </div>

        <div className="border border-[#e7ebf3] dark:border-[#2b3547] rounded-xl p-4 md:p-6 bg-gray-50 dark:bg-[#182130]">
          <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Escribe un mensaje para probar Gemini..."
              className="flex-1 bg-white dark:bg-[#111418] border border-[#e7ebf3] dark:border-[#2b3547] rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg mb-4 border border-red-200 dark:border-red-800">
              {error}
            </div>
          )}

          {response && (
            <div className="bg-white dark:bg-[#111418] border border-[#e7ebf3] dark:border-[#2b3547] rounded-lg p-5 mt-4">
              <h3 className="font-semibold text-[#0d121b] dark:text-white mb-2 flex items-center gap-2">
                <Bot size={18} className="text-primary" />
                Respuesta de Gemini:
              </h3>
              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
