import Tracks from "@/app/json/calendar.json";
import Image from "next/image";

const TrackView = async ({params} : {params : Promise<{slug : string}>}) => {
    const slug = (await params).slug;
    const track = Tracks.tracks.find(t => t.slug === slug);

    if (!track) {
        return (
            <div>
                <p>Invalid Track</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mt-20 md:mt-32 font-formula max-w-screen-lg mx-auto dark:text-white">
            <p className="text-center font-bold text-xl">{track.name}</p>
            <div className="max-w-[400px] p-4 flex flex-col items-center">
                <div className="border-2 border-gray-200 dark:border-gray-900 w-auto">
                    <Image
                        className="w-[95vw] h-auto md:w-[400px]"
                        src={`/tracks/${track.image}`}
                        alt={track.slug}
                        width={400}
                        height={300}
                    />
                    <div className="p-2">
                        <p>Location: {track.location}</p>
                        <p>Race Date: {track.race_date}</p>
                        <p>First Race: {track.first_gp}</p>
                        <p>Laps: {track.laps}</p>
                        <p>Length: {track.length}</p>
                        <p>Lap Record: {track.record}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackView