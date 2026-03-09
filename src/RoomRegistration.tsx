import React from 'react';
import {
  ChevronRight,
  Info,
  DollarSign,
  ListChecks,
  Image as ImageIcon,
  Plus,
  Trash2,
  Cloud,
  CheckCircle,
  X
} from 'lucide-react';

interface RoomRegistrationProps {
  onNavigate?: (page: 'dashboard' | 'tenants' | 'contracts' | 'inventory' | 'floor-plan' | 'room-inventory' | 'room-registration') => void;
  onDiscard?: () => void;
}

export default function RoomRegistration({ onNavigate, onDiscard }: RoomRegistrationProps) {
  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto h-full relative">
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 lg:p-10 pb-32">
        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 mb-6 uppercase tracking-wider">
          <button onClick={() => onNavigate?.('dashboard')} className="hover:text-primary transition-colors">Home</button>
          <ChevronRight size={12} />
          <button onClick={() => onNavigate?.('room-inventory')} className="hover:text-primary transition-colors">Units</button>
          <ChevronRight size={12} />
          <span className="text-primary">New Room Registration</span>
        </nav>
        
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Room Registration</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Register a new unit for your property. All context-specific settings have been pre-applied.</p>
        </div>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          {/* General Details */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <Info className="text-primary" size={24} />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">General Details</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Room Name/Number</label>
                <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:text-white p-3 transition-all" placeholder="e.g. Executive Suite 402" type="text"/>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Floor (Piso)</label>
                <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:text-white p-3 transition-all" placeholder="4" type="number"/>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Area (sq meters)</label>
                <div className="relative">
                  <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:text-white pr-12 p-3 transition-all" placeholder="45" type="number"/>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold bg-slate-50 dark:bg-slate-700 px-2 py-1 rounded">m²</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Financials */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <DollarSign className="text-primary" size={24} />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Financials</h3>
              </div>
              <div className="p-8 space-y-6 flex-1">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Monthly Rent (Renta)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:text-white pl-10 p-3 transition-all" placeholder="1,200.00" type="number"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Security Deposit (Deposito)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:text-white pl-10 p-3 transition-all" placeholder="2,400.00" type="number"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <ListChecks className="text-primary" size={24} />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Amenities</h3>
              </div>
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 flex-1">
                {[
                  "WiFi / Fiber",
                  "Private Bathroom",
                  "Electricity Included",
                  "Agua incluido",
                  "Calentador agua ducha",
                  "Lavadero cocina"
                ].map((amenity, index) => (
                  <label key={index} className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input defaultChecked={index === 0} className="w-6 h-6 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox"/>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Media Assets */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <ImageIcon className="text-primary" size={24} />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Media Assets</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5">
                <div className="aspect-square bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group">
                  <div className="size-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Plus className="text-primary" size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-extrabold text-slate-700 dark:text-slate-300">Add Photos</p>
                    <p className="text-[10px] text-slate-400">JPG, PNG up to 5MB</p>
                  </div>
                </div>
                
                <div className="relative group aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                  <img alt="Room Interior" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9NqVDxfTR92PX_ch2-hUitVso3xL24bGR-YB0PwPwQvmXD3CwhG8_K5fS2I18q4liOfBnOekuLFRhsU8LeD7Jk92MZo-CODz1boEgNcipD_DVlOt18Mvb1p72F5BbUWVtgw8YQzP9djFmlKdvcyDikyOGnbEB_xmol6H8_QdRAJUiMLyLgLjv4K-cjhXmK3VL9KIe0COjLPFaiIfiAFGf9X4u_G5AcHQn34ED7gN19Dc-zIAgZJrp8Bw0tSmPB9cXbzJKQL7m8xV0" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                    <button className="bg-white/90 backdrop-blur-sm text-red-600 p-2 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-lg" type="button">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="relative group aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                  <img alt="Kitchenette" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzqfpQ2OkC5BbdIQZ3Be86FQrnrsW-sO9G1fPCjoPwRyoP_aOUg5hE9SMSKhIBZBuuKiycSttZ9MqMwZpUIcY86weM6Do62ZOsY4l3cWz15NArHsgoLFhDINwd7QvSxyRDFXK42it7TE9Q3X5P9F3ktbwklElqA8UBr7Sgqsx-QGQzcamYY1TGtipu7xApiGD8ps15fCUPpG8Emaddf4DWKOoqg8LG0995nzogM5O5LSGc1eiN-e7Any--fg1S6OfMOl-oAI_upPLb" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                    <button className="bg-white/90 backdrop-blur-sm text-red-600 p-2 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-lg" type="button">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-slate-400">
                <Info size={14} />
                <p className="text-xs font-medium">Add at least 3 high-quality photos of the space to improve listing visibility.</p>
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 md:left-72 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 py-5 px-6 lg:px-10 z-[60] shadow-2xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Cloud className="text-green-500" size={20} />
            All changes are autosaved
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={onDiscard}
              className="flex-1 sm:flex-none px-8 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all" 
              type="button"
            >
              Discard
            </button>
            <button 
              onClick={() => onNavigate?.('room-inventory')}
              className="flex-1 sm:flex-none px-12 py-3 bg-primary hover:bg-blue-600 text-white text-sm font-extrabold rounded-xl shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-2" 
              type="button"
            >
              <CheckCircle size={18} />
              Register Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
