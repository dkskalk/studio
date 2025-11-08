import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CreatorSection() {
    const creatorImage = PlaceHolderImages.find(img => img.id === 'dra-laura');

    return (
        <section id="creator" className="py-20 md:py-28 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        Conheça a especialista por trás do método
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div className="flex justify-center">
                        {creatorImage && (
                            <Image 
                                src={creatorImage.imageUrl}
                                alt={creatorImage.description}
                                width={400}
                                height={400}
                                className="rounded-full aspect-square object-cover border-8 border-primary/50 shadow-2xl shadow-primary/30"
                                data-ai-hint={creatorImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="text-center md:text-left space-y-4 text-foreground/80 text-balance">
                       <h3 className="font-bold text-2xl font-headline text-foreground">Dra. Laura Menezes</h3>
                       <p className="font-semibold text-lg text-foreground/90">Psicóloga e Idealizadora do Método Neurohipnose Infantil™</p>
                       
                       <p>Com mais de 15 anos de experiência em psicologia clínica e estudos avançados sobre neurociência e comportamento infantil, Dra. Laura Menezes tornou-se referência no atendimento de crianças com distúrbios de sono, ansiedade e hiperatividade.</p>

                       <p>Formada em Psicologia pela Universidade de São Paulo (USP), com especialização em Neuropsicologia e Terapias de Reprogramação Mental, ela sempre acreditou que o sono é a base do equilíbrio emocional infantil.</p>

                       <p>Ao longo de sua trajetória, Dra. Laura percebeu que as abordagens tradicionais muitas vezes não alcançavam os resultados desejados, principalmente em crianças da era pós-digital — mais estimuladas, ansiosas e resistentes a métodos convencionais de relaxamento. Foi a partir dessa inquietação que ela desenvolveu o Método Neurohipnose Infantil™, uma técnica inovadora e totalmente segura.</p>
                       
                       <p>Seu trabalho ganhou reconhecimento nacional por ajudar milhares de famílias a transformarem noites de tensão em momentos de paz, reconectando seus filhos com o sono e o bem-estar emocional.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
