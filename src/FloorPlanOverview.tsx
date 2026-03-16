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
  const properties = [
    { id: 1, name: 'Building Alpha • Downtown Complex', details: '124 Units • 6 Floors • New York, NY' },
    { id: 2, name: 'Riverview Residences', details: '86 Units • 4 Floors • Jersey City, NJ' },
    { id: 3, name: 'Skyline Square', details: '210 Units • 15 Floors • Chicago, IL' },
    { id: 4, name: 'Harbor Commons', details: '45 Units • 2 Floors • Boston, MA' },
  ];
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Sub-header / Breadcrumb & Filters */}
      <div className="bg-white dark:bg-[#161e2d] border-b border-[#e7ebf3] dark:border-[#1e293b] px-6 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <nav className="flex items-center text-sm font-medium">
            <button className="text-gray-500 hover:text-primary transition-colors">All Properties</button>
            <ChevronRight className="text-gray-400 mx-1" size={16} />
            <div className="relative group">
              <select 
                value={selectedProperty.id}
                onChange={(e) => {
                  const prop = properties.find(p => p.id === Number(e.target.value));
                  if (prop) setSelectedProperty(prop);
                }}
                className="appearance-none bg-primary/5 hover:bg-primary/10 text-primary px-3 py-1.5 pr-9 rounded-lg border border-primary/10 transition-all font-bold text-sm focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer dark:bg-primary/10"
              >
                {properties.map(p => (
                  <option key={p.id} value={p.id} className="dark:bg-[#161e2d] dark:text-white">
                    {p.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary" size={16} />
            </div>
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

    </div>
  );
}
