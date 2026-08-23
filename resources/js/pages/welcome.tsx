import { Head, Link, usePage } from '@inertiajs/react';
import { Briefcase, GraduationCap, LineChart } from 'lucide-react';
import AppLogoIcon from '@/components/app-logo-icon';
import { dashboard, login, register } from '@/routes';

const highlights = [
    {
        title: 'For students',
        description:
            'Discover internships, track applications, and complete OJT hours in one place.',
        icon: GraduationCap,
    },
    {
        title: 'For coordinators',
        description:
            'Verify companies, deploy students, and monitor attendance, documents, and reports.',
        icon: LineChart,
    },
    {
        title: 'For partners',
        description:
            'Publish opportunities, review applicants, and supervise deployed interns.',
        icon: Briefcase,
    },
];

export default function Welcome() {
    const { auth, name } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
                <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-700 text-white">
                            <AppLogoIcon className="size-5" />
                        </span>
                        <span>{name}</span>
                    </Link>
                    <nav className="flex items-center gap-3 text-sm">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-lg bg-cyan-700 px-4 py-2 font-medium text-white hover:bg-cyan-800"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="rounded-lg px-4 py-2 font-medium text-zinc-700 hover:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-800"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-lg bg-cyan-700 px-4 py-2 font-medium text-white hover:bg-cyan-800"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-20">
                    <section className="max-w-3xl">
                        <p className="text-sm font-medium tracking-wide text-cyan-800 uppercase dark:text-cyan-300">
                            Internship application, deployment, and monitoring
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                            Connecting students, schools, and opportunities.
                            </h1>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                            OJTConnect digitizes the full on-the-job training
                            lifecycle for Information Technology students—from
                            company discovery through attendance, weekly reports,
                            and completion.
                        </p>
                    </section>

                    <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {highlights.map(({ title, description, icon: Icon }) => (
                            <article
                                key={title}
                                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                            >
                                <Icon
                                    className="size-5 text-cyan-700 dark:text-cyan-400"
                                    aria-hidden
                                />
                                <h2 className="mt-3 text-base font-semibold">
                                    {title}
                                </h2>
                                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </section>
                    </main>
            </div>
        </>
    );
}
