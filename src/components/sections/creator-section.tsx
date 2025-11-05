import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CreatorSection() {
    const creatorImage = PlaceHolderImages.find(img => img.id === 'dra-laura');

    return (
        <section id="creator" className="py-20 md:py-28 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2 flex justify-center">
                        {creatorImage && (
                            <Image 
                                src={creatorImage.imageUrl}
                                alt="Dra. Laura Menezes, criadora do método Neurohipnose Infantil"
                                width={400}
                                height={400}
                                className="rounded-full aspect-square object-cover border-8 border-primary/50 shadow-2xl shadow-primary/30"
                                data-ai-hint={creatorImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="lg:col-span-3 text-center lg:text-left">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">
                            Conheça a criadora do método
                        </h2>
                        <div className="mt-8 text-foreground/80 space-y-4 text-balance">
                           <p className="font-bold text-xl text-foreground">Dra. Laura Menezes</p>
                           <p className="font-semibold text-foreground">Psicóloga e Idealizadora do Método Neurohipnose Infantil™</p>
                           
                           <p>Com mais de 15 anos de experiência em psicologia clínica e estudos avançados sobre neurociência e comportamento infantil, Dra. Laura Menezes tornou-se referência no atendimento de crianças com distúrbios de sono, ansiedade e hiperatividade. Formada em Psicologia pela Universidade de São Paulo (USP), com especialização em Neuropsicologia e Terapias de Reprogramação Mental, ela sempre acreditou que o sono é a base do equilíbrio emocional infantil.</p>

                           <p>Ao longo de sua trajetória, Dra. Laura percebeu que as abordagens tradicionais muitas vezes não alcançavam os resultados desejados, principalmente em crianças da era pós-digital — mais estimuladas, ansiosas e resistentes a métodos convencionais de relaxamento. Foi a partir dessa inquietação que ela desenvolveu o Método Neurohipnose Infantil™, uma técnica inovadora e totalmente segura, que combina princípios da hipnose clínica, neuroplasticidade e sons de indução suave para restaurar a qualidade do sono infantil de forma natural e profunda.</p>

                           <p>Seu trabalho ganhou reconhecimento nacional por ajudar milhares de famílias a transformarem noites de tensão em momentos de paz. Hoje, Dra. Laura dedica-se integralmente à missão de ensinar mães e pais a reconectarem seus filhos com o sono, o descanso e o bem-estar emocional — sem o uso de medicamentos, telas ou estímulos artificiais.</p>
                           
                           <p>Com empatia e linguagem simples, ela traduz conceitos científicos complexos em práticas acessíveis, oferecendo às famílias uma nova esperança através da Neurohipnose Infantil™, o primeiro método brasileiro de indução suave de sono profundo especialmente criado para crianças da era digital.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
