import React, { useState } from 'react';
import {
  Search,
  Bell,
  ChevronRight,
  ChevronDown,
  Filter,
  BarChart3,
  Download,
  MoreVertical,
  User,
  CheckCircle,
  Wrench,
  Layers,
  X,
  Building2
} from 'lucide-react';

export default function FloorPlanOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Sub-header / Breadcrumb & Filters */}
      <div className="bg-white dark:bg-[#161e2d] border-b border-[#e7ebf3] dark:border-[#1e293b] px-6 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <nav className="flex items-center text-sm font-medium">
            <button className="text-gray-500 hover:text-primary transition-colors">All Properties</button>
            <ChevronRight className="text-gray-400 mx-1" size={16} />
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 cursor-pointer bg-primary/5 hover:bg-primary/10 text-primary px-3 py-1.5 rounded-lg border border-primary/10 transition-all"
            >
              <span className="font-bold">Building Alpha • Downtown Complex</span>
              <ChevronDown size={16} />
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 hidden md:flex">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Filter:</span>
            <div className="flex bg-[#f0f2f5] dark:bg-[#1e293b] p-1 rounded-lg border border-[#e7ebf3] dark:border-[#1e293b]">
              <button className="px-3 py-1 text-xs font-bold rounded-md bg-white dark:bg-[#2d3748] shadow-sm text-primary">All Units</button>
              <button className="px-3 py-1 text-xs font-bold rounded-md text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Vacancies Only
              </button>
              <button className="px-3 py-1 text-xs font-bold rounded-md text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                In Maintenance
              </button>
            </div>
          </div>
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden md:block"></div>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-300 bg-[#f0f2f5] dark:bg-[#1e293b] px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Filter size={18} />
            More Filters
          </button>
        </div>
      </div>

      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-[#e7ebf3] dark:border-[#1e293b] bg-white dark:bg-[#161e2d] p-6 flex flex-col gap-8 overflow-y-auto shrink-0 hidden lg:flex">
          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Floor Summary</h3>
            <div className="bg-background-light dark:bg-[#1e293b] p-4 rounded-xl space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-black text-primary">84%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Total Occupancy</p>
                </div>
                <BarChart3 className="text-primary/40" size={32} />
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-gray-900 dark:text-white">42 Rooms</span>
                  <span className="text-gray-500">Total Units</span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="font-bold text-green-500">6 Empty</span>
                  <span className="text-gray-500">Available</span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Legend</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="size-4 rounded-full bg-primary"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Occupied</span>
                <span className="ml-auto text-xs text-gray-400">32</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-4 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available</span>
                <span className="ml-auto text-xs text-gray-400">6</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-4 rounded-full bg-orange-500"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Maintenance</span>
                <span className="ml-auto text-xs text-gray-400">4</span>
              </div>
            </div>
          </section>
          <section className="mt-auto">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl border border-primary/20">
              <p className="text-sm font-bold text-primary mb-1">Quick Actions</p>
              <p className="text-xs text-primary/70 mb-3">Bulk manage room statuses or export data.</p>
              <button className="w-full bg-primary text-white text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                <Download size={16} />
                Export CSV
              </button>
            </div>
          </section>
        </aside>

        {/* Main Grid Content */}
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
          <div className="px-8 py-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#0d121b] dark:text-white">Floor Plan Overview</h1>
              <p className="text-gray-500 text-sm">Interactive visualization of current assets</p>
            </div>
            <div className="flex gap-2 bg-white dark:bg-[#161e2d] p-1 rounded-xl shadow-sm border border-[#e7ebf3] dark:border-[#1e293b]">
              <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-white shadow-sm">Floor 1</button>
              <button className="px-4 py-2 text-sm font-bold rounded-lg hover:bg-background-light dark:hover:bg-[#1e293b] text-gray-500 transition-all">Floor 2</button>
              <button className="px-4 py-2 text-sm font-bold rounded-lg hover:bg-background-light dark:hover:bg-[#1e293b] text-gray-500 transition-all">Floor 3</button>
              <button className="px-4 py-2 text-sm font-bold rounded-lg hover:bg-background-light dark:hover:bg-[#1e293b] text-gray-500 transition-all">Roof Garden</button>
            </div>
          </div>

          <div className="px-8 pb-10">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
              {/* Room Cards */}
              <div className="group relative bg-white dark:bg-[#161e2d] border-l-4 border-primary rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-black text-gray-800 dark:text-gray-100">101</span>
                  <MoreVertical className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </div>
                <p className="text-xs font-bold text-gray-400 mb-1">$1,200/mo</p>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-primary">
                  <User size={12} /> Occupied
                </div>
              </div>

              <div className="group relative bg-white dark:bg-[#161e2d] border-l-4 border-green-500 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-black text-gray-800 dark:text-gray-100">102</span>
                  <MoreVertical className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </div>
                <p className="text-xs font-bold text-gray-400 mb-1">$1,200/mo</p>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-green-500">
                  <CheckCircle size={12} /> Available
                </div>
              </div>

              <div className="group relative bg-white dark:bg-[#161e2d] border-l-4 border-orange-500 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-black text-gray-800 dark:text-gray-100">103</span>
                  <MoreVertical className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </div>
                <p className="text-xs font-bold text-gray-400 mb-1">$1,450/mo</p>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-orange-500">
                  <Wrench size={12} /> Maint.
                </div>
              </div>

              {/* More items to fill the grid */}
              {[104, 105, 108, 110, 112].map((room) => (
                <div key={room} className="group bg-white dark:bg-[#161e2d] border-l-4 border-primary rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2"><span className="text-lg font-black text-gray-800 dark:text-gray-100">{room}</span></div>
                  <p className="text-xs font-bold text-gray-400 mb-1">$1,200/mo</p>
                  <div className="text-[10px] font-bold uppercase text-primary">Occupied</div>
                </div>
              ))}

              {[106, 107, 111].map((room) => (
                <div key={room} className="group bg-white dark:bg-[#161e2d] border-l-4 border-green-500 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2"><span className="text-lg font-black text-gray-800 dark:text-gray-100">{room}</span></div>
                  <p className="text-xs font-bold text-gray-400 mb-1">${room === 107 ? '1,350' : '1,400'}/mo</p>
                  <div className="text-[10px] font-bold uppercase text-green-500">Available</div>
                </div>
              ))}

              <div className="group bg-white dark:bg-[#161e2d] border-l-4 border-orange-500 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-all">
                <div className="flex justify-between items-start mb-2"><span className="text-lg font-black text-gray-800 dark:text-gray-100">109</span></div>
                <p className="text-xs font-bold text-gray-400 mb-1">$1,200/mo</p>
                <div className="text-[10px] font-bold uppercase text-orange-500">Maint.</div>
              </div>
            </div>

            <div className="mt-12 p-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl flex flex-col items-center justify-center bg-white/30 dark:bg-white/5">
              <Layers className="text-gray-300 mb-4" size={64} />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Visual Architectural Overlay</p>
              <p className="text-gray-400 text-xs mt-1 text-center max-w-sm">Detailed structural blueprint will render here when a wing or floor is fully loaded.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Property Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#161e2d] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-black text-gray-900 dark:text-white">Select Property</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-colors text-gray-500"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  className="w-full bg-gray-50 dark:bg-[#1e293b] border-none rounded-xl pl-10 py-3 text-sm focus:ring-2 focus:ring-primary text-gray-900 dark:text-white" 
                  placeholder="Filter by name, region or status..." 
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <div className="p-4 border-2 border-primary bg-primary/5 rounded-xl flex items-center gap-4 cursor-pointer">
                  <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">DT</div>
                  <div className="flex-1">
                    <p className="font-bold text-primary">Building Alpha • Downtown Complex</p>
                    <p className="text-xs text-gray-500">124 Units • 6 Floors • New York, NY</p>
                  </div>
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <div className="p-4 border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl flex items-center gap-4 cursor-pointer transition-all">
                  <div className="size-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 font-bold">RV</div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 dark:text-white">Riverview Residences</p>
                    <p className="text-xs text-gray-500">86 Units • 4 Floors • Jersey City, NJ</p>
                  </div>
                </div>
                <div className="p-4 border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl flex items-center gap-4 cursor-pointer transition-all">
                  <div className="size-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 font-bold">SQ</div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 dark:text-white">Skyline Square</p>
                    <p className="text-xs text-gray-500">210 Units • 15 Floors • Chicago, IL</p>
                  </div>
                </div>
                <div className="p-4 border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl flex items-center gap-4 cursor-pointer transition-all">
                  <div className="size-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 font-bold">HC</div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 dark:text-white">Harbor Commons</p>
                    <p className="text-xs text-gray-500">45 Units • 2 Floors • Boston, MA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-[#1e293b] border-t border-gray-100 dark:border-gray-800 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-primary text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
              >
                Confirm Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
