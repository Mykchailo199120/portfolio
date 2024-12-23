import React, { useEffect, useRef } from "react";

const MainPage: React.FC = () => {
    const typewriterRef1 = useRef(null); // Реф для першої секції
    const typewriterRef2 = useRef(null); // Реф для другої секції
    const typewriterRef3 = useRef(null); // Реф для третьої секції
    const hasAnimated = useRef(false); // Прапорець для відслідковування анімації


    useEffect(() => {
        if (hasAnimated.current) return; // Уникаємо повторної анімації
        hasAnimated.current = true;

        const animateTyping = (
            ref: React.RefObject<HTMLDivElement | null>,
            textLines: string[]
        ) => {
            if (!ref.current) return;

            const speed = 50; // Швидкість друкування
            let lineIndex = 0;
            let charIndex = 0;

            const typeCharacter = () => {
                const children = ref.current?.children;

                if (!children) return; // Перевірка чи існують діти

                if (lineIndex < textLines.length && lineIndex < children.length) {
                    const currentLine = textLines[lineIndex];
                    const lineSpan = children[lineIndex] as HTMLSpanElement;

                    if (!lineSpan) return;

                    if (charIndex < currentLine.length) {
                        lineSpan.innerHTML += currentLine[charIndex]; // Додаємо символ
                        charIndex++;
                        setTimeout(typeCharacter, speed);
                    } else {
                        charIndex = 0;
                        lineIndex++;
                        setTimeout(typeCharacter, speed * 5); // Затримка між рядками
                    }
                }
            };

            typeCharacter();
        };

        animateTyping(typewriterRef1, [
            `"Art born from the depths of the soul,`,
            `where every note is a story,`,
            `and every sound is eternity."`,
        ]);
        animateTyping(typewriterRef2, [
            `"To inspire everyone who hears its sound. Through music, the deepest emotions are revealed, connecting hearts and showing that art is a language understood by all. Each of his performances becomes an unforgettable moment where music transforms into a source of inspiration, awakening love, hope, and a yearning for beauty in people."`,
        ]);
        animateTyping(typewriterRef3, [
            `"Between the soul and eternity,`,
            `where every note becomes inspiration,`,
            `a language of the heart that can inspire,`,
            `and heal each of us."`,
        ]);
    }, []);


    return (
        <main>
            <section className="flex justify-between items-center mt-40">
                <div className="flex flex-col items-start space-y-6">
                    <h1
                        className="tracking-wider text-gray-700 font-Allura leading-relaxed text-8xl font-semibold ml-40"
                        style={{ lineHeight: "2" }}
                    >
                        Dmitriy Mikheev
                    </h1>
                    <div
                        className="ml-60  text-gray-700 h-full w-auto overflow-visible relative font-Allura text-6xl"
                        style={{ height: "120px", lineHeight: "1.5" }}
                        ref={typewriterRef1}
                    >
                        <span className="block text-6xl leading-[3rem] mb-6"></span>
                        <span className="line-spacing block text-6xl leading-[3rem] mb-6 ml-20"></span>
                        <span className="line-spacing block text-6xl leading-[3rem] mb-6 ml-20"></span>
                    </div>
                </div>
                <div className="w-1/4 flex">
                    <img
                        src="/images/IMG_1454.jpeg"
                        alt="Opera Singer"
                        className="shadow-xl h-auto w-[410]  -translate-x-20 -mt-40 ml-20"
                    />
                </div>
            </section>

            <section className="flex justify-between items-center py-16 px-8 mt-40">
                <div className="w-1/4">
                    <img
                        src="/images/IMG_1456.jpeg"
                        alt="Opera Performance"
                        className="shadow-xl h-auto w-[410] -translate-x-20 ml-12"
                    />
                </div>
                <div className="flex flex-col items-start space-y-6 w-1/2 ml-20 mr-40 mb-80">
                    <h1 className="font-Allura tracking-wider text-gray-700 leading-relaxed text-8xl font-bold mb-16">
                        A great gift
                    </h1>
                    <div
                        className="text-gray-700 h-auto w-full overflow-visible relative font-Allura text-5xl"
                        style={{ height: "120px", lineHeight: "1.5" }}
                        ref={typewriterRef2}
                    >
                        <span></span>
                    </div>
                </div>
            </section>
            <section className="flex justify-between items-center py-14 mt-40">
                <div className="flex flex-col items-start space-y-6 mb-60">
                    <h1
                        className="tracking-wider text-gray-700 font-Allura leading-relaxed text-8xl font-semibold ml-80"
                        style={{ lineHeight: "2" }}
                    >
                        A bridge
                    </h1>
                    <div
                        className="ml-60  text-gray-700 h-full w-auto overflow-visible relative font-Allura text-6xl"
                        style={{ height: "120px", lineHeight: "1.5" }}
                        ref={typewriterRef3}
                    >
                        <span className="block text-6xl leading-[3rem] mb-6"></span>
                        <span className="block text-6xl leading-[3rem] mb-6"></span>
                        <span className="block text-6xl leading-[3rem] mb-6"></span>
                        <span className="block text-6xl leading-[3rem] mb-6"></span>
                    </div>
                </div>
                <div className="w-1/4 flex">
                    <img
                        src="/images/IMG_1451.jpeg"
                        alt="Opera Singer"
                        className="shadow-xl h-auto w-[410] -translate-x-20 -mt-16 ml-20"
                    />
                </div>
            </section>
        </main>
    );
};

export default MainPage;
