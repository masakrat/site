"use client"; // Enables this component to use client-side features like useState.

import Fuse from 'fuse.js';
import { useMemo, useState } from "react";
import { Massacre } from "../types";
import MassacreDetail from "@/components/MassacreDetail";

type Props = {
    massacres: Massacre[];
};

export default function MassacreList({ massacres }: Props) {

    const [search, setSearch] = useState('');

    const fuse = useMemo(() => new Fuse(massacres, {
        keys: [{ name: 'name', weight: 2 }, 'location', 'description'],
        ignoreLocation: true,
        threshold: .3
    }), [massacres]);

    return (
        <div>
            <header className="flex justify-between items-center p-4 bg-gray-800">
                <h1 className="text-2xl font-bold">Kosovo Massacres</h1>
                <input type="search" onInput={(e) => setSearch(e.currentTarget.value)} className="block p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:gray-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" />
            </header>

            <main className="container mx-auto p-4">
                {(search.trim() != '' ? fuse.search(search).map(f => {
                    console.log({ f })
                    return f.item
                }) : massacres).map((massacre, index) =>
                    <MassacreDetail key={index} massacre={massacre} />)
                }
            </main>
        </div>
    );
}