import React, { useState } from 'react';
import {
  ChevronRight,
  FileEdit,
  Save,
  Download,
  PenTool,
  Info,
  CheckCircle,
  ArrowLeft,
  Building2,
  Edit
} from 'lucide-react';

export default function ContractPreview({ onBack, onSave }: { onBack: () => void, onSave: () => void }) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="flex-1 p-4 md:p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-6 overflow-y-auto pb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <button onClick={onBack} className="hover:text-primary transition-colors">Contratos</button>
            <ChevronRight size={16} />
            <button onClick={onBack} className="hover:text-primary transition-colors">Nuevo Contrato</button>
            <ChevronRight size={16} />
            <span className="font-semibold text-gray-900 dark:text-gray-200">Vista Previa y Edición</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Vista Previa del Contrato</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Revise o modifique las cláusulas del documento antes de proceder.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 font-bold transition-all ${
              isEditMode
                ? 'bg-primary text-white border-primary'
                : 'border-primary text-primary hover:bg-primary/5'
            }`}
          >
            <FileEdit size={20} />
            {isEditMode ? 'Terminar Edición' : 'Editar Cláusulas'}
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition-all">
            <Save size={20} />
            Guardar Cambios en Documento
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8">
          <div className="bg-gray-200 dark:bg-gray-800 p-8 md:p-12 rounded-2xl overflow-y-auto max-h-[1000px] custom-scrollbar">
            <div className="bg-white text-gray-900 p-[10%] mx-auto w-full max-w-[800px] border border-gray-300 shadow-2xl relative aspect-[1/1.414]">
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-2">
                  <Building2 className="text-primary" size={40} />
                  <span className="font-black text-2xl tracking-tighter">AdminRental</span>
                </div>
                <div className="text-right text-[10px] text-gray-400 uppercase tracking-widest">
                  Documento No: CT-2023-0882<br/>
                  Fecha de Emisión: 28 Oct 2023
                </div>
              </div>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-gray-900 pb-2 inline-block">CONTRATO DE ARRENDAMIENTO RESIDENCIAL</h2>
              </div>
              <div className="space-y-6 text-sm leading-relaxed text-justify">
                <div 
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  className={`outline-none ${isEditMode ? 'cursor-text border border-dashed border-blue-400 bg-blue-50/30 p-2 -m-2 rounded transition-all' : ''}`}
                >
                  <span className="font-bold">PRIMERA: PARTES.</span> Entre los suscritos a saber, <span className="font-bold border-b border-gray-300">ADMINRENTAL PROPIEDADES S.A.</span>, en adelante el ARRENDADOR, y por la otra parte <span className="font-bold bg-yellow-50 px-1 border-b-2 border-primary/20">JUAN PABLO PÉREZ</span>, identificado con cédula de identidad No. 12.345.678-9, en adelante el ARRENDATARIO, se ha convenido celebrar el presente contrato de arrendamiento.
                </div>
                <div 
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  className={`outline-none ${isEditMode ? 'cursor-text border border-dashed border-blue-400 bg-blue-50/30 p-2 -m-2 rounded transition-all' : ''}`}
                >
                  <span className="font-bold">SEGUNDA: OBJETO Y PROPIEDAD.</span> El ARRENDADOR entrega al ARRENDATARIO el uso y goce de la <span className="font-bold">HABITACIÓN 101</span>, ubicada en la propiedad <span class="font-bold italic">Residencial Libertad 450</span>, comuna de Santiago, Región Metropolitana.
                </div>
                <div 
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  className={`outline-none ${isEditMode ? 'cursor-text border border-dashed border-blue-400 bg-blue-50/30 p-2 -m-2 rounded transition-all' : ''}`}
                >
                  <span className="font-bold">TERCERA: PLAZO Y VIGENCIA.</span> El término de duración del presente contrato será de doce (12) meses, comenzando a regir desde el día <span className="font-bold bg-yellow-50 px-1">01 de Noviembre de 2023</span> y terminando de forma automática el día <span class="font-bold bg-yellow-50 px-1">01 de Noviembre de 2024</span>.
                </div>
                <div 
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  className={`outline-none ${isEditMode ? 'cursor-text border border-dashed border-blue-400 bg-blue-50/30 p-2 -m-2 rounded transition-all' : ''}`}
                >
                  <span className="font-bold">CUARTA: CANON DE ARRENDAMIENTO Y PAGOS.</span> El canon de arrendamiento mensual será de <span className="font-bold text-lg">$450.000 (Cuatrocientos cincuenta mil pesos)</span>. Este valor incluye los servicios de agua, electricidad, gas de red e internet de alta velocidad. El pago deberá realizarse dentro de los primeros cinco (5) días de cada mes calendario.
                </div>
                <div 
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  className={`outline-none ${isEditMode ? 'cursor-text border border-dashed border-blue-400 bg-blue-50/30 p-2 -m-2 rounded transition-all' : ''}`}
                >
                  <span className="font-bold">QUINTA: DEPÓSITO DE GARANTÍA.</span> El ARRENDATARIO hace entrega de la suma equivalente a un mes de renta en concepto de garantía, la cual será devuelta al finalizar el contrato previa verificación del estado del inmueble.
                </div>
                <div className="pt-20 grid grid-cols-2 gap-20">
                  <div className="text-center">
                    <div className="border-t border-gray-900 pt-2 text-xs font-bold uppercase">Arrendador</div>
                    <div className="text-[10px] text-gray-500">AdminRental Propiedades S.A.</div>
                  </div>
                  <div className="text-center">
                    <div className="border-t border-gray-900 pt-2 text-xs font-bold uppercase">Arrendatario</div>
                    <div className="text-[10px] text-gray-500">Juan Pablo Pérez</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-0 right-0 px-[10%] text-center">
                <div className="text-[9px] text-gray-400">Página 1 de 1 - Documento generado digitalmente por AdminRental Platform.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Estado del Documento</h3>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Generado
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                El borrador ha sido generado correctamente. Ahora puede realizar ajustes manuales si es necesario antes de la firma.
              </p>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 py-3.5 rounded-xl font-bold text-gray-700 dark:text-gray-200 transition-all group">
                <Download className="text-primary group-hover:scale-110 transition-transform" size={20} />
                Descargar Borrador PDF
              </button>
              <div className="relative py-2">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white dark:bg-gray-800 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Siguiente Paso</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-blue-700 text-white py-4 rounded-xl font-black text-sm tracking-wide shadow-lg shadow-blue-500/20 transition-all">
                <PenTool size={20} />
                Enviar para Firma Digital
              </button>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/50">
            <div className="flex gap-4">
              <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm self-start">
                <Info className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Edición Manual Activada</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Cualquier cambio realizado manualmente sobrescribirá los valores por defecto del sistema para este contrato específico.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Verificación Rápida</h4>
            <ul class="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                <CheckCircle className="text-emerald-500" size={18} />
                Identidad validada
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                <CheckCircle className="text-emerald-500" size={18} />
                Propiedad verificada
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                <Edit className="text-blue-500" size={18} />
                Modificaciones permitidas
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 py-4 px-6 md:px-10 z-[60]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <button onClick={onBack} className="text-gray-500 hover:text-gray-900 dark:hover:text-white font-bold text-sm transition-colors flex items-center gap-2">
            <ArrowLeft size={20} />
            Volver a Selección
          </button>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-gray-400 text-xs italic">El historial de ediciones quedará registrado.</span>
            <button onClick={onSave} className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-3 rounded-xl font-black text-sm tracking-wide shadow-lg transition-all flex items-center gap-3 hover:opacity-90">
              Guardar Borrador Final
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
