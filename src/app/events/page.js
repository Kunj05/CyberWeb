"use client"; 

import ExpandableEventCard from "@/components/events/ExpandableEventCard";
import { getEvents } from "@/helpers/getEvents";
import { useState, useEffect } from "react";

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState("all"); 

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data);
        };
        fetchEvents();
    }, []);

    // Filter events based on the selected filter
    const filteredEvents = filter === "all" 
        ? events 
        : events.filter(event => event.attributes.status === filter);

    return (
        <>
            <section className="min-h-screen bg-secondary-800 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] bg-dark-bg">
                <div className="mx-auto py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                    <h2 className="container mx-auto mt-12 mb-4 px-4 text-4xl font-bold text-white">Events</h2>
                    
                    {/* Filter Buttons */}
                    <div className="flex justify-center mb-6">
                        <div className="flex flex-wrap justify-center space-x-4">
                            <button 
                                onClick={() => setFilter("all")}
                                className={`min-w-[80px] py-2 text-lg rounded-full transition duration-300 shadow-md 
                                    sm:min-w-[100px] sm:py-2 sm:text-lg 
                                    md:min-w-[120px] md:py-2 md:text-lg
                                    ${filter === "all" ? "bg-blue-600 text-white" : "bg-white text-black"}`}
                            >
                                All
                            </button>

                            <button 
                                onClick={() => setFilter("upcoming")}
                                className={`min-w-[80px] py-2 text-lg rounded-full transition duration-300 shadow-md 
                                    sm:min-w-[100px] sm:py-2 sm:text-lg 
                                    md:min-w-[120px] md:py-2 md:text-lg
                                    ${filter === "upcoming" ? "bg-blue-600 text-white" : "bg-white text-black"}`}
                            >
                                Upcoming
                            </button>
                            
                            <button 
                                onClick={() => setFilter("past")}
                                className={`min-w-[80px] py-2 text-lg rounded-full transition duration-300 shadow-md 
                                    sm:min-w-[100px] sm:py-2 sm:text-lg 
                                    md:min-w-[120px] md:py-2 md:text-lg
                                    ${filter === "past" ? "bg-blue-600 text-white" : "bg-white text-black"}`}
                            >
                                Past
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Event cards */}
                        {filteredEvents.map((event) => (
                            <ExpandableEventCard key={event.id} event={{ id: event.id, ...event.attributes }} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
