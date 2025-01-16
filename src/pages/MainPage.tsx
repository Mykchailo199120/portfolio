import React, { useEffect, useRef } from "react";
import Sliders from "../components/Sliders.tsx";

const MainPage: React.FC = () => {
    const sectionsRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeIn");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        sectionsRefs.current.forEach((section) => observer.observe(section));

        return () => {
            sectionsRefs.current.forEach((section) => observer.unobserve(section));
        }
    }, []);

    const typewriterRef1 = useRef<HTMLDivElement | null>(null);
    const typewriterRef2 = useRef<HTMLDivElement | null>(null);
    const typewriterRef3 = useRef<HTMLDivElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const animateTyping = (
            ref: React.RefObject<HTMLDivElement>,
            textLines: string[]
        ) => {
            if (!ref.current) return;

            const speed = 50;
            let lineIndex = 0;
            let charIndex = 0;

            const typeCharacter = () => {
                const children = ref.current?.children;

                if (!children || lineIndex >= textLines.length) return;
                const currentLine = textLines[lineIndex];
                const lineSpan = children[lineIndex] as HTMLSpanElement;

                if (lineSpan && charIndex < currentLine.length) {
                    lineSpan.innerHTML += currentLine[charIndex];
                    charIndex++;
                    setTimeout(typeCharacter, speed);
                } else if (lineSpan) {
                    charIndex = 0;
                    lineIndex++;
                    setTimeout(typeCharacter, speed * 5);
                }
            };

            textLines.forEach(() => {
                if (ref.current && ref.current.children.length < textLines.length) {
                    const span = document.createElement("span");
                    span.className = "block leading-[3rem] mb-6";
                    ref.current.appendChild(span);
                }
            });

            typeCharacter();
        };

        animateTyping(typewriterRef1, [
            "Art born from the depths of the soul,",
            "where every note is a story,",
            "and every sound is eternity.",
        ]);
        animateTyping(typewriterRef2, [
            "To inspire everyone who hears its sound. Through music, the deepest emotions are revealed, connecting hearts and showing that art is a language understood by all. Each of his performances becomes an unforgettable moment where music transforms into a source of inspiration, awakening love, hope, and a yearning for beauty in people.",
        ]);
        animateTyping(typewriterRef3, [
            "Between the soul and eternity,",
            "where every note becomes inspiration,",
            "a language of the heart that can inspire,",
            "and heal each of us.",
        ]);
    }, []);

    return (
        <main className="space-y-20">
            <section className="opacity-0 transform transition-all duration-1000 flex flex-col-reverse md:flex-row justify-between items-center lg:mb-60"
            ref={(el) => el && sectionsRefs.current.push(el as HTMLDivElement)}
            >
                <div className="flex flex-col items-start text-center lg:text-left space-y-8 md:space-y-10 lg:space-y-12 pl-60">
                    <h1
                        className="tracking-wider text-gray-700 font-Allura leading-relaxed text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold"
                    >
                        Dmitriy Mikheev
                    </h1>
                    <div
                        className="text-gray-700 overflow-visible font-Allura text-2xl sm:text-3xl lg:text-6xl pl-40"
                        style={{ lineHeight: "1.5", height: "120px" }}
                        ref={typewriterRef1}
                    ></div>
                </div>
                <div className="w-full lg:w-auto flex  justify-center">
                    <img
                        src="/images/ing_1.png"
                        alt="Opera Singer"
                        className="w-full md:w-[300px] lg:w-[440px]"
                    />
                </div>
            </section>

            <section
                ref={(el) => el && sectionsRefs.current.push(el as HTMLDivElement)}
                className="opacity-0 transform transition-all duration-1000 flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0 lg:space-y-12 lg:px-0">
                <div className="flex justify-center md:justify-start">
                    <img
                        src="/images/img_2.png"
                        alt="Opera Performance"
                        className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[440px] translate-x-[-5%]"
                    />
                </div>
                <div
                    className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-4 lg:space-y-8 w-full md:w-1/2 pb-40 mr-40 px-4 lg:px-0 relative -translate-y-8 md:-translate-y-16">
                    <h1 className="font-Allura tracking-wider text-gray-700 leading-relaxed pl-40 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                        A great gift
                    </h1>
                    <div
                        className="text-gray-700 font-Allura text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ height: "120px", lineHeight: "1.5" }}
                        ref={typewriterRef2}
                    ></div>
                </div>
            </section>

            <section
                ref={(el) => el && sectionsRefs.current.push(el as HTMLDivElement)}
                className="opacity-0 transform transition-all duration-1000 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 py-10 px-6 md:px-12 lg:px-20">
                <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-12 ml-80 pt-36 w-full md:w-2/3 lg:w-1/2">
                    <h1
                        className="tracking-wider text-gray-700 font-Allura leading-relaxed text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-center md:text-left"
                    >
                        A bridge
                    </h1>
                    <div
                        className="text-gray-700 font-Allura text-2xl md:text-3xl lg:text-5xl text-center md:text-left"
                        style={{ height: "120px", lineHeight: "1.5" }}
                        ref={typewriterRef3}
                    ></div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                        src="/images/img_3.png"
                        alt="Opera Singer"
                        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[450px] ml-60 object-cover"
                    />
                </div>
            </section>
            <section
                ref={(el) => el && sectionsRefs.current.push(el as HTMLDivElement)}
                className="opacity-0 transform transition-all duration-1000"
            >
                <Sliders />
            </section>
        </main>
    );
};

export default MainPage;
