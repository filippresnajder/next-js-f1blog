import Image from "next/image";
import Link from "next/link";

interface PropsData {
    props: {
        id: number;
        title: string;
        image: string;
        slug: string;
    }
}

const Article = ({props}: PropsData) => {
    return (
        <Link key={props.id} href={`/articles/${props.slug}`}>
            <div
                className="w-[80vw] md:w-[30vw] max-w-[500px] border-2 rounded border-gray-50 dark:border-gray-900 overflow-hidden hover:cursor-pointer font-formula text-sm">
                <Image
                    className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    src={`/articles/${props.image}`}
                    alt={props.slug}
                    width={16}
                    height={9}
                />
                <div className="bg-red-700 text-white p-2 relative z-10">
                    {props.title}
                </div>
            </div>
        </Link>
    );
}

export default Article