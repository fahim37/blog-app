import Image from "next/image";

export default function WhoAreWe() {
    return (
        <section className=" container min-h-screen py-8 md:py-16">
            <div>
                <h1 className="text-4xl font-light text-textPrimary flex items-center justify-center lg:mb-[50px]">
                    <div className="h-8 w-2 bg-primary mr-2"></div>
                    Who are we?
                </h1>
                <div className="grid md:grid-cols-[1fr,auto] gap-8 items-start">
                    <div className="space-y-6 lg:w-[450px] text-[16px]">
                        <p className="text-white/90 leading-relaxed">
                            Welcome to [College Name]&apos;s Student-Run Environmental Publication, a platform created and managed by
                            students passionate about protecting our planet. Our mission is to raise awareness, ignite meaningful
                            discussions, and inspire action towards a more sustainable future.
                        </p>

                        <p className="text-white/90 leading-relaxed">
                            As an entirely student-driven publication, we provide a space for students to explore environmental
                            issues, share innovative solutions, and highlight the work of individuals and organizations making a
                            positive impact on the environment. We believe that informed and engaged students have the power to drive
                            change, and through our publication, we aim to foster a community of environmental advocates.
                        </p>

                        <p className="text-white/90 leading-relaxed">
                            Whether it&apos;s covering the latest in climate science, sustainability initiatives, or offering tips for
                            living more eco-friendly, our goal is to educate, inspire, and motivate our readers to take practical
                            steps in preserving the world around us.
                        </p>

                        <p className="text-white/90 leading-relaxed">
                            We are committed to providing diverse perspectives on environmental challenges and solutions, and we
                            encourage submissions from all members of the college community.
                        </p>
                    </div>

                    <div className="relative translate-x-[-100px] lg:translate-x-[-80px] ">
                        <div className="relative">
                            <Image
                                src="/assets/homepage/whoarewe1.png"
                                alt="Who are we Image"
                                width={450}
                                height={500}
                                className="w-full h-full object-cover rounded-[12px] overflow-hidden"
                            />
                            <div className="absolute bottom-[-100px] right-[-150px] w-[300px]">
                                <Image src="/assets/homepage/whoarewe2.png" alt="Who are we Image"
                                    width={250}
                                    height={250}
                                    className="rounded-[12px] h-[250px] w-[250px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

