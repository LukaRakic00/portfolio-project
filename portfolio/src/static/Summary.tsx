function Summary() {
    return (
        <>
            <p className="text-4xl mb-8">About me</p>
            <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
                <p className="mb-5">
                    I&apos;m a passionate software developer with a bachelor&apos;s degree in Computer Science 🎓 and a strong focus on Android and web application development.
                    I specialize in creating efficient, user-friendly solutions using cutting-edge technologies like Kotlin, Firebase, and PostgreSQL.
                    My goal is to combine my technical expertise with my creativity to build impactful applications.
                </p>
            </article>
        </>
    );
}

export default Summary;
