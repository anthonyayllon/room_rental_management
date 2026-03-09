import React from 'react';
import { X, MapPin, Save } from 'lucide-react';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddPropertyModal({ isOpen, onClose }: AddPropertyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#101622] w-full max-w-[640px] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#101622]">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Agregar Nueva Propiedad</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Nombre de la Propiedad</label>
              <input 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                placeholder="Ej. Torre Residencial Bosques" 
                type="text"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Dirección</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <input 
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                  placeholder="Calle Falsa 123, Ciudad de México" 
                  type="text"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tipo de Propiedad</label>
              <div className="relative">
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none">
                  <option disabled selected value="">Selecciona un tipo</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="comercial">Local Comercial</option>
                  <option value="terreno">Terreno</option>
                  <option value="oficina">Oficina</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Número de Niveles</label>
                <input 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  min="0" 
                  placeholder="0" 
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Número de Habitaciones</label>
                <input 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  min="0" 
                  placeholder="0" 
                  type="number"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Detalles Adicionales</label>
              <textarea 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none" 
                placeholder="Notas extras sobre la propiedad, estado de mantenimiento, etc." 
                rows={3}
              ></textarea>
            </div>
          </form>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex justify-end items-center gap-3 bg-gray-50/50 dark:bg-gray-900/50">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 transition-all flex items-center gap-2">
            <Save size={18} />
            Guardar Propiedad
          </button>
        </div>
      </div>
    </div>
  );
}
