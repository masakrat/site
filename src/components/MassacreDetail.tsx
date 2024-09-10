import { Massacre } from "@/types"


type Prop = {
    massacre: Massacre;
};

export default function MassacreDetails({ massacre }: Prop) {
    return (
        <div className="bg-gray-800 p-6 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
                {massacre.name}
            </h2>
            <p className="text-gray-300 text-lg mb-2 italic">{massacre.location}</p>
            <p className="text-gray-200 mb-4">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(massacre.date.start).toLocaleDateString()}{" "}
                {massacre.date.end !== massacre.date.start && (
                    <> - {new Date(massacre.date.end).toLocaleDateString()}</>
                )}
            </p>
            <p className="text-lg mb-6">{massacre.description}</p>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Victims</h3>
                <div className="bg-gray-700 p-4">
                    <p className="mb-4">
                        <span className="font-semibold">Total Victims:</span> {massacre.victims.total}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gender */}
                        {massacre.victims.unarmed_civilians.demographics.gender &&
                            <div>
                                <h4 className="font-bold underline mb-2">Gender</h4>
                                <ul className="list-disc list-inside text-gray-300">
                                    {Object.entries(massacre.victims.unarmed_civilians.demographics.gender).map(
                                        ([gender, count]) => (
                                            <li key={gender}>
                                                {gender[0].toUpperCase() + gender.substring(1)}: {count}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        }
                        {/* Age */}
                        <div>
                            <h4 className="font-bold underline mb-2">Age Groups</h4>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>Minors: {massacre.victims.unarmed_civilians.demographics.age.minors}</li>
                                <li>Adults: {massacre.victims.unarmed_civilians.demographics.age.adults}</li>
                                <li>Over 65: {massacre.victims.unarmed_civilians.demographics.age.over_65}</li>
                            </ul>
                        </div>
                        {/* Ethnicity */}
                        <div>
                            <h4 className="font-bold underline mb-2">Ethnicity</h4>
                            <ul className="list-disc list-inside text-gray-300">
                                {Object.entries(massacre.victims.unarmed_civilians.demographics.ethnicity).map(
                                    ([ethnicity, count]) => (
                                        <li key={ethnicity}>
                                            {ethnicity}: {count}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Notes</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {massacre.notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Sources</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {Object.values(massacre.sources).map((source, idx) => (
                        typeof source === "string" ? (
                            <li key={idx}>{source}</li>
                        ) : (
                            Object.entries(source).map(([key, value]) => (
                                <li key={key}>
                                    {key}
                                    <ul className="list-disc list-inside ml-4">
                                        {Array.isArray(value)
                                            ? value.map((v, i) => <li key={i}>{v}</li>)
                                            : <li>{value}</li>}
                                    </ul>
                                </li>
                            ))
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
}
