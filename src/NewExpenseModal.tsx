import React from 'react';
import { X, ChevronDown, Paperclip, Save } from 'lucide-react';

interface NewExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewExpenseModal({ isOpen, onClose }: NewExpenseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#1a202c] w-full max-w-[600px] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="px-8 pt-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Nuevo Gasto</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Registre los detalles del gasto administrativo del inmueble.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <form className="px-8 py-4 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Propiedad</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 dark:text-white appearance-none cursor-pointer">
                  <option disabled selected value="">Elegir propiedad</option>
                  <option value="residencial-lomas">Residencial Lomas</option>
                  <option value="villas-sol">Villas del Sol</option>
                  <option value="edificio-central">Edificio Central</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Ubicación específica</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 dark:text-white appearance-none cursor-pointer">
                  <option disabled selected value="">Asignar a...</option>
                  <option value="area-comun">Área Común</option>
                  <optgroup label="Cuartos">
                    <option value="cuarto-1">Cuarto 01</option>
                    <option value="cuarto-2">Cuarto 02</option>
                    <option value="cuarto-3">Cuarto 03</option>
                    <option value="cuarto-4">Cuarto 04</option>
                  </optgroup>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Descripción del Gasto</label>
            <div className="relative">
              <input 
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400" 
                placeholder="Ej. Reparación de tubería o pago de servicio" 
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Monto</label>
              <div className="flex">
                <select className="rounded-l-lg border-r-0 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:ring-0 focus:border-gray-200 outline-none cursor-pointer">
                  <option>USD</option>
                  <option>PEN</option>
                  <option>EUR</option>
                </select>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-r-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 dark:text-white" 
                  placeholder="0.00" 
                  step="0.01" 
                  type="number"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Fecha del Gasto</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 dark:text-white" 
                  type="date"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Categoría</label>
            <div className="relative">
              <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 dark:text-white appearance-none cursor-pointer">
                <option disabled selected value="">Seleccione una categoría</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="servicios">Servicios (Luz/Agua)</option>
                <option value="limpieza">Limpieza</option>
                <option value="impuestos">Impuestos</option>
                <option value="otros">Otros</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Notas Adicionales</label>
            <textarea 
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 dark:text-white resize-none placeholder:text-gray-400" 
              placeholder="Detalles extra sobre el proveedor o motivo del gasto..." 
              rows={2}
            ></textarea>
          </div>

          <div className="pt-1">
            <button className="group flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors" type="button">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Paperclip size={20} className="text-primary" />
              </div>
              Adjuntar Comprobante/Recibo
            </button>
          </div>

          <div className="pt-4 pb-4 flex justify-center">
            <button 
              className="w-48 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2" 
              type="submit"
            >
              <Save size={20} />
              Guardar Gasto
            </button>
          </div>
        </form>
        <div className="h-1.5 w-full bg-primary/10"></div>
      </div>
    </div>
  );
}
