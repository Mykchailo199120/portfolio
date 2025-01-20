import React, { useEffect, useRef } from "react";
import Sliders from "../components/Sliders.tsx";


const MainPage: React.FC = () => {
    const sectionsRefs = useRef<HTMLDivElement[]>([]);

    // Додатковий метод для безпечного додавання до масиву
    const addSectionRef = (el: HTMLDivElement | null) => {
        if (el && !sectionsRefs.current.includes(el)) {
            sectionsRefs.current.push(el);
        }
    };

    // Анімація при скролі
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
        };
    }, []);

    // Анімація друкування тексту
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
            <section
                className="opacity-0 transform transition-all duration-1000 flex flex-col-reverse md:flex-row justify-between items-center lg:mb-60"
                ref={addSectionRef}
            >
                <div className="flex flex-col lg:items-start text-center lg:text-left space-y-4  md:space-y-10 lg:space-y-12 lg:pl-60 mt-4 ">
                    <h1 className="tracking-wider text-gray-700 font-Allura  text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">
                        Dmitriy Mikheev
                    </h1>
                    <div
                        className="text-gray-700 overflow-visible font-Allura text-2xl sm:text-4xl lg:text-6xl lg:pl-40"
                        style={{height: "120px"}}
                        ref={typewriterRef1}
                    ></div>
                </div>
                <div className="w-full lg:w-auto flex justify-center">
                    <img
                        src="/images/ing_1.png"
                        alt="Opera Singer"
                        className="w-full mt-8 md:w-[300px] lg:w-[440px]"
                    />
                </div>
            </section>

            <section
                ref={addSectionRef}
                className="opacity-0 transform transition-all duration-1000 flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0 lg:space-y-12 lg:px-0"
            >
                <div className="flex mt-16 justify-center md:justify-start">
                    <img
                        src="/images/img_2.png"
                        alt="Opera Performance"
                        className="w-full sm:w-[250px] md:w-[300px] lg:w-[440px] translate-x-[-1%]"
                    />
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left  space-y-8 lg:space-y-4 w-full md:w-1/2 lg:mr-40 px-4 lg:px-0 relative lg:-translate-y-8 md:-translate-y-16">
                    <h1 className="font-Allura tracking-wider text-gray-700 leading-relaxed lg:pl-40 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                        A great gift
                    </h1>
                    <div
                        className="text-gray-700 font-Allura text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ height: "120px"}}
                        ref={typewriterRef2}
                    ></div>
                </div>
            </section>

            <section
                ref={addSectionRef}
                className="opacity-0  transform transition-all duration-1000 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 py-10 px-6 md:px-12 lg:px-20"
            >
                <div className="flex flex-col items-center md:items-start space-y-4 lg:space-y-12 lg:ml-80 pt-80 w-full md:w-2/3 lg:w-1/2">
                    <h1 className="tracking-wider text-gray-700 font-Allura leading-relaxed text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-center md:text-left">
                        A bridge
                    </h1>
                    <div
                        className="text-gray-700 font-Allura text-2xl md:text-3xl lg:text-5xl text-center md:text-left"
                        style={{ height: "120px"}}
                        ref={typewriterRef3}
                    ></div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                        src="/images/img_3.png"
                        alt="Opera Singer"
                        className="w-full ml-12 mt-60 sm:w-[250px] md:w-[300px] lg:w-[450px] lg:ml-60"
                    />
                </div>
            </section>
            <section ref={addSectionRef} className="opacity-0 transform transition-all duration-1000">
                <Sliders />
            </section>
        </main>
    );
};

export default MainPage;
