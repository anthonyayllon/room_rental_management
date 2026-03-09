import React from 'react';
import {
  Building2,
  Bell,
  ChevronRight,
  MapPin,
  Download,
  Plus,
  DoorOpen,
  TrendingUp,
  UserCheck,
  ImageOff,
  DollarSign,
  Search,
  ChevronDown,
  Filter,
  ArrowDownAZ,
  Upload,
  Eye,
  Edit2,
  CheckCircle,
  ImagePlus
} from 'lucide-react';

interface RoomInventoryProps {
  onNavigate?: (page: 'dashboard' | 'tenants' | 'contracts' | 'inventory' | 'floor-plan' | 'room-inventory' | 'room-registration') => void;
}

export default function RoomInventory({ onNavigate }: RoomInventoryProps) {
  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto h-full">
      <main className="flex-1 px-4 py-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto w-full">
        <nav className="flex items-center gap-2 mb-6">
          <a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">Properties</a>
          <ChevronRight className="text-slate-400" size={16} />
          <a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">Skyline Heights</a>
          <ChevronRight className="text-slate-400" size={16} />
          <span className="text-slate-900 dark:text-white text-sm font-bold">Rooms & Inventory</span>
        </nav>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Skyline Heights Inventory</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium flex items-center gap-2">
              <MapPin size={18} />
              1200 Avenue of the Americas, Building A
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all shadow-sm">
              <Download size={18} />
              Export CSV
            </button>
            <button 
              onClick={() => onNavigate?.('room-registration')}
              className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <Plus size={18} />
              Add New Unit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Total Units</p>
              <div className="bg-primary/10 text-primary p-1 rounded-lg">
                <DoorOpen size={20} />
              </div>
            </div>
            <p className="text-slate-900 dark:text-white text-2xl font-extrabold">48</p>
            <div className="flex items-center gap-1">
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                <TrendingUp size={14} className="mr-1" /> +2%
              </span>
              <span className="text-slate-400 text-xs font-medium">vs last month</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Occupancy Rate</p>
              <div className="bg-emerald-500/10 text-emerald-500 p-1 rounded-lg">
                <UserCheck size={20} />
              </div>
            </div>
            <p className="text-slate-900 dark:text-white text-2xl font-extrabold">92%</p>
            <div className="flex items-center gap-1">
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                <TrendingUp size={14} className="mr-1" /> +1.5%
              </span>
              <span className="text-slate-400 text-xs font-medium">near capacity</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-orange-500">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Missing Photos</p>
              <div className="bg-orange-500/10 text-orange-500 p-1 rounded-lg">
                <ImageOff size={20} />
              </div>
            </div>
            <p className="text-slate-900 dark:text-white text-2xl font-extrabold">5</p>
            <p className="text-orange-500 text-xs font-bold uppercase">Needs attention</p>
          </div>

          <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Revenue (Mo)</p>
              <div className="bg-primary/10 text-primary p-1 rounded-lg">
                <DollarSign size={20} />
              </div>
            </div>
            <p className="text-slate-900 dark:text-white text-2xl font-extrabold">$58,400</p>
            <div className="flex items-center gap-1">
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                <TrendingUp size={14} className="mr-1" /> +$1.2k
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-1 items-center gap-3 w-full">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input className="w-full h-10 rounded-lg text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary pl-10 pr-4 text-sm font-medium placeholder:text-slate-400 placeholder:font-normal" placeholder="Search Unit ID or ID..." type="text"/>
              </div>
              <div className="relative">
                <select className="h-10 pl-3 pr-10 rounded-lg text-sm font-bold bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:ring-primary appearance-none cursor-pointer">
                  <option value="">All Floors</option>
                  <option value="1">Floor 1</option>
                  <option value="2">Floor 2</option>
                  <option value="3">Floor 3</option>
                  <option value="4">Floor 4</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={14} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700">
                <Filter size={18} />
                More Filters
              </button>
              <button className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-all border border-slate-200 dark:border-slate-700" title="Sort A-Z">
                <ArrowDownAZ size={20} />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-12 text-center">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Floor</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Unit ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Area</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Rent</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Deposit</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Media Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-5 text-center">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">Floor 1</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">Unit 101</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">75 sqm</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">$1,200</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">$2,400</td>
                  <td className="px-6 py-5">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-dashed border-orange-400 text-orange-600 dark:text-orange-400 text-xs font-bold hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors">
                      <Upload size={14} />
                      Missing Photos
                    </button>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 items-center">
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="View Details">
                        <Eye size={20} />
                      </button>
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="Edit/Modify">
                        <Edit2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-5 text-center">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">Floor 1</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">Unit 102</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">80 sqm</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">$1,350</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">$2,700</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1.5">
                      <CheckCircle size={14} />
                      4 Photos Managed
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 items-center">
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="View Details">
                        <Eye size={20} />
                      </button>
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="Edit/Modify">
                        <Edit2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group border-l-4 border-l-primary/40">
                  <td className="px-6 py-5 text-center">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">Floor 2</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">Unit 201</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">75 sqm</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">$1,250</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">$2,500</td>
                  <td className="px-6 py-5">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-dashed border-orange-400 text-orange-600 dark:text-orange-400 text-xs font-bold hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors">
                      <Upload size={14} />
                      Missing Photos
                    </button>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 items-center">
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="View Details">
                        <Eye size={20} />
                      </button>
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="Edit/Modify">
                        <Edit2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-5 text-center">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">Floor 2</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">Unit 202</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">110 sqm</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">$1,800</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">$3,600</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1.5">
                      <CheckCircle size={14} />
                      6 Photos Managed
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 items-center">
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="View Details">
                        <Eye size={20} />
                      </button>
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="Edit/Modify">
                        <Edit2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-5 text-center">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">Floor 3</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">Unit 301</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">75 sqm</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">$1,300</td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600 dark:text-slate-400">$2,600</td>
                  <td className="px-6 py-5">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-dashed border-orange-400 text-orange-600 dark:text-orange-400 text-xs font-bold hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors">
                      <Upload size={14} />
                      Missing Photos
                    </button>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 items-center">
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="View Details">
                        <Eye size={20} />
                      </button>
                      <button className="flex items-center justify-center size-9 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" title="Edit/Modify">
                        <Edit2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-bold text-slate-900 dark:text-white">1</span> to <span className="font-bold text-slate-900 dark:text-white">10</span> of <span className="font-bold text-slate-900 dark:text-white">48</span> results
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1.5 rounded bg-primary text-white text-sm font-bold">1</button>
              <button className="px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">2</button>
              <button className="px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">3</button>
              <span className="px-2 py-1.5 text-slate-400">...</span>
              <button className="px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">Next</button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-primary/5 rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 text-primary p-3 rounded-full">
              <ImagePlus size={24} />
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg">Bulk Photo Upload</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Drag and drop photos here to automatically match them to units using QR codes or file names.</p>
            </div>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md hover:shadow-primary/20 transition-all">
            Open Uploader
          </button>
        </div>
      </main>
      
      <footer className="mt-auto px-10 py-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-400 text-xs">
        <p>© 2024 PropManager Real Estate Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Support</a>
        </div>
      </footer>
    </div>
  );
}
