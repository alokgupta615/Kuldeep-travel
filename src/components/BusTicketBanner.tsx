import Link from "next/link";
import { Bus, Ticket } from "lucide-react";

export default function BusTicketBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Bus className="h-10 w-10 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Bus Tickets Now Available!
              </h2>
              <p className="text-blue-100 text-lg">
                Book AC/Non-AC luxury buses for outstation travel, group tours, and corporate trips.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Link 
              href="/book-now" 
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Ticket size={20} />
              Book Bus Ticket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
