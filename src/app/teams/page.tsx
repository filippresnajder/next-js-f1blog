import Teams from "@/app/json/teams.json";
import Team from "@/components/Team";

interface TeamData {
    id: number,
    name: string,
    base: string,
    starts: number,
    championships: number,
    wins: number,
    poles: number,
    podiums: number,
    points: number,
    ly_pos: string,
    image: string,
    slug: string
}

export default function Page() {
    const teams: Array<TeamData> = Teams.teams;

    return (
        <div className="grid md:grid-cols-2 place-items-center mt-20 md:mt-32 max-w-screen-md mx-auto gap-y-6">
            {teams.map(t =>
                <Team key={t.id} props={t}/>
            )}
        </div>
    );
}