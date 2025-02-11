import Tracks from "@/app/json/calendar.json";
import Calendar from "@/components/Calendar";

interface TrackData {
    id: number,
    name: string,
    location: string,
    race_date: string,
    first_gp: number,
    laps: number,
    length: number,
    record: string,
    image: string,
    slug: string,
}

export default function Page() {
    const tracks: Array<TrackData> = Tracks.tracks;

    return (
        <div className="grid md:grid-cols-2 place-items-center mt-20 md:mt-32 max-w-screen-md mx-auto gap-20 gap-y-6">
            {tracks.map(t =>
                <Calendar key={t.id} props={t}/>
            )}
        </div>
    );
}