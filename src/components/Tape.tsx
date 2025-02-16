import { Fragment } from "react";
import StarIcon from "../../assets/star.png";

const words = [
    "Performant",
    "Reliable",
    "Responsive",
    "Robust",
    "Scalable",
    "Secure",
    "Accessible",
    "User Friendly",
    "Maintainable",
    "Interactive",
    "Search Optimized",
    "Usable",
];

export const Tape = () => {
    return (
        <div className="py-1 lg:py-4 overflow-x-clip">
            <div className=" bg-gradient-to-r from-cyan-300 to-purple-400  -rotate-1 -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {words.map((word) => (
                                    <div key={word} className="inline-flex gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                                        <img src={StarIcon} alt="Star" className="w-4 h-4" />
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};